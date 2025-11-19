package com.example.pearlgrey.service;

import com.example.pearlgrey.entity.Admin;
import com.example.pearlgrey.repository.AdminRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.Date;

@Service
public class AuthService {
    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${app.jwt.secret}")
    private String jwtSecret;

    @Value("${app.jwt.expiration-ms}")
    private long jwtExpirationMs;

    @Value("${app.admin.username:admin}")
    private String defaultAdminUsername;

    @Value("${app.admin.password:admin}")
    private String defaultAdminPassword;

    public AuthService(AdminRepository adminRepository, PasswordEncoder passwordEncoder) {
        this.adminRepository = adminRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public String login(String username, String password) {
        System.out.println("AuthService.login called for user='" + username + "'");
        var opt = adminRepository.findByUsername(username);
        if (opt.isPresent()) {
            Admin admin = opt.get();
            System.out.println("Found admin in DB for user='" + username + "'");
            if (!passwordEncoder.matches(password, admin.getPassword())) {
                System.out.println("Password mismatch for user='" + username + "'");
                throw new RuntimeException("Invalid credentials");
            }
            return generateToken(admin.getUsername());
        }

        // If no admin exists in DB, allow the default credentials from properties
        if (defaultAdminUsername != null && defaultAdminPassword != null
                && defaultAdminUsername.equals(username) && defaultAdminPassword.equals(password)) {
            System.out.println("No DB admin found; using default credentials for user='" + username + "'");
            // create admin record for subsequent calls
            Admin a = new Admin();
            a.setUsername(username);
            a.setPassword(passwordEncoder.encode(password));
            adminRepository.save(a);
            return generateToken(username);
        }

        throw new RuntimeException("Invalid credentials");
    }

    public String generateToken(String username) {
        Date now = new Date();
        Date expiry = new Date(now.getTime() + jwtExpirationMs);

        return Jwts.builder()
            .setSubject(username)
            .setIssuedAt(now)
            .setExpiration(expiry)
            .signWith(SignatureAlgorithm.HS256, getSigningKeyBytes())
            .compact();
    }

    public String getUsernameFromToken(String token) {
        try {
                Claims claims = Jwts.parser()
                    .setSigningKey(getSigningKeyBytes())
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
            return claims.getSubject();
        } catch (JwtException ex) {
            return null;
        }
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(getSigningKeyBytes()).build().parseClaimsJws(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }

    // Helper method to create the signing key bytes
    private byte[] getSigningKeyBytes() {
        return jwtSecret.getBytes(StandardCharsets.UTF_8);
    }
}

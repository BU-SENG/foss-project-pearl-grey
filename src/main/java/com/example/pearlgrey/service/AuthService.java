package com.example.pearlgrey.service;

import com.example.pearlgrey.entity.Admin;
import com.example.pearlgrey.repository.AdminRepository;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
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

    public AuthService(AdminRepository adminRepository, PasswordEncoder passwordEncoder) {
        this.adminRepository = adminRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public String login(String username, String password) {
        Admin admin = adminRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));
        if (!passwordEncoder.matches(password, admin.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }
        return generateToken(admin.getUsername());
    }

    public String generateToken(String username) {
        Date now = new Date();
        Date expiry = new Date(now.getTime() + jwtExpirationMs);

        return Jwts.builder()
                .subject(username)
                .issuedAt(now)
                .expiration(expiry)
                .signWith(getSignInKey(), Jwts.SIG.HS256) // Updated: Uses Key object and SIG constant
                .compact();
    }

    public String getUsernameFromToken(String token) {
        return Jwts.parser() // Updated: parserBuilder() is now parser()
                .verifyWith(getSignInKey()) // Updated: setSigningKey() is now verifyWith()
                .build()
                .parseSignedClaims(token) // Updated: parseClaimsJws() is now parseSignedClaims()
                .getPayload() // Updated: getBody() is now getPayload()
                .getSubject();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parser()
                    .verifyWith(getSignInKey())
                    .build()
                    .parseSignedClaims(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            // It is good practice to catch IllegalArgumentException as well
            // in case the token is null or empty
            return false;
        }
    }

    // Helper method to create the SecretKey object
    private SecretKey getSignInKey() {
        byte[] keyBytes = jwtSecret.getBytes(StandardCharsets.UTF_8);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}

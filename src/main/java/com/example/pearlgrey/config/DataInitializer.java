package com.example.pearlgrey.config;

import com.example.pearlgrey.entity.Admin;
import com.example.pearlgrey.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer {
    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${app.admin.username:admin}")
    private String defaultAdminUsername;

    @Value("${app.admin.password:admin}")
    private String defaultAdminPassword;

    public DataInitializer(AdminRepository adminRepository, PasswordEncoder passwordEncoder) {
        this.adminRepository = adminRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @EventListener(ApplicationReadyEvent.class)
    public void onApplicationReady() {
        try {
            // Try to create default admin if not present. Use findByUsername to avoid counting
            // which may depend on certain SQL dialect behaviors on some embedded DBs.
            if (adminRepository.findByUsername(defaultAdminUsername).isEmpty()) {
                Admin a = new Admin();
                a.setUsername(defaultAdminUsername);
                a.setPassword(passwordEncoder.encode(defaultAdminPassword));
                adminRepository.save(a);
            }
        } catch (Exception ex) {
            System.err.println("DataInitializer: could not initialize admin: " + ex.getMessage());
        }
    }
}

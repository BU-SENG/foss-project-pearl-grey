package com.example.pearlgrey.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.net.URI;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Configuration
@EnableMethodSecurity
public class SecurityConfig {

    @Value("${app.cors.allowed-origins:*}")
    private String allowedOriginsProperty;

    public SecurityConfig() { }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http, JwtAuthenticationFilter jwtAuthenticationFilter, CorsFilter corsFilter) throws Exception {
        http.csrf(csrf -> csrf.disable());
        http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        http.authorizeHttpRequests(authorize -> authorize
            .requestMatchers(
                "/api/auth/**",
                "/api/public/**",
                "/v3/api-docs/**",
                "/v3/api-docs.yaml",
                "/swagger-ui/**",
                "/swagger-ui.html",
                "/swagger-ui/index.html",
                "/webjars/**"
            ).permitAll()
            .requestMatchers("/api/reports/**", "/api/donations", "/api/distributions").authenticated()
            .anyRequest().authenticated()
        );

        http.addFilterBefore(corsFilter, UsernamePasswordAuthenticationFilter.class);
        http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring().requestMatchers(
            "/v3/api-docs/**",
            "/v3/api-docs.yaml",
            "/swagger-ui/**",
            "/swagger-ui.html",
            "/swagger-ui/index.html",
            "/webjars/**"
        );
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }

    // Return the concrete UrlBasedCorsConfigurationSource to avoid collision with other CorsConfigurationSource beans
    @Bean
    public UrlBasedCorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        String normalized = allowedOriginsProperty == null ? "*" : allowedOriginsProperty.trim();
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

        if ("*".equals(normalized) || normalized.isEmpty()) {
            configuration.setAllowedOriginPatterns(List.of("*"));
        } else {
            List<String> patterns = Arrays.stream(normalized.split(","))
                    .map(String::trim)
                    .filter(s -> !s.isEmpty())
                    .flatMap(s -> {
                        if ("*".equals(s)) return Stream.of("*");
                        String candidate = s;
                        if (!candidate.startsWith("http://") && !candidate.startsWith("https://")) {
                            candidate = "http://" + candidate;
                        }
                        try {
                            URI uri = new URI(candidate);
                            String host = uri.getHost();
                            String scheme = uri.getScheme();
                            if (host == null) return Stream.of(s);
                            if (host.equalsIgnoreCase("localhost") || host.equals("127.0.0.1")) {
                                String pattern = scheme + "://" + host + ":*";
                                return Stream.of(pattern);
                            } else {
                                return Stream.of(candidate);
                            }
                        } catch (Exception e) {
                            return Stream.of(s);
                        }
                    })
                    .collect(Collectors.toList());

            configuration.setAllowedOriginPatterns(patterns);
        }

        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setAllowCredentials(true);
        configuration.setMaxAge(3600L);

        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public CorsFilter corsFilter(UrlBasedCorsConfigurationSource source) {
        return new CorsFilter((CorsConfigurationSource) source);
    }
}

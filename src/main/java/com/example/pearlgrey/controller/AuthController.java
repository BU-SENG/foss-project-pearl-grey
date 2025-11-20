package com.example.pearlgrey.controller;

import com.example.pearlgrey.dto.LoginRequest;
import com.example.pearlgrey.dto.RegisterRequest;
import com.example.pearlgrey.dto.LoginResponse;
import com.example.pearlgrey.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
	private final AuthService authService;

	public AuthController(AuthService authService) {
		this.authService = authService;
	}

	@PostMapping("/login")
	public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
		System.out.println("AuthController.login received username='" + request.getUsername() + "'");
		String token = authService.login(request.getUsername(), request.getPassword());
		System.out.println("AuthController.login succeeded for user='" + request.getUsername() + "'");
		return ResponseEntity.ok(new LoginResponse(token));
	}

	@PostMapping("/register")
	public ResponseEntity<LoginResponse> register(@RequestBody RegisterRequest request) {
		System.out.println("AuthController.register received username='" + request.getUsername() + "'");
		String token = authService.register(request.getUsername(), request.getPassword());
		System.out.println("AuthController.register succeeded for user='" + request.getUsername() + "'");
		return ResponseEntity.ok(new LoginResponse(token));
	}
}

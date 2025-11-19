package com.example.pearlgrey.controller;

import com.example.pearlgrey.dto.SummaryDTO;
import com.example.pearlgrey.service.InventoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/public")
public class PublicController {
	private final InventoryService inventoryService;

	public PublicController(InventoryService inventoryService) {
		this.inventoryService = inventoryService;
	}

	@GetMapping("/summary")
	public ResponseEntity<List<SummaryDTO>> getSummary() {
		return ResponseEntity.ok(inventoryService.getPublicSummary());
	}
}

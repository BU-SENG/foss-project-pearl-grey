package com.example.pearlgrey.controller;

import com.example.pearlgrey.dto.InventoryDTO;
import com.example.pearlgrey.service.InventoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/inventory")
public class InventoryController {
	private final InventoryService inventoryService;

	public InventoryController(InventoryService inventoryService) {
		this.inventoryService = inventoryService;
	}

	@GetMapping
	public ResponseEntity<List<InventoryDTO>> getInventory() {
		return ResponseEntity.ok(inventoryService.getInventory());
	}
}

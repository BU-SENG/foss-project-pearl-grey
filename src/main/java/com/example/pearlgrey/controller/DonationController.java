package com.example.pearlgrey.controller;

import com.example.pearlgrey.dto.DonationDTO;
import com.example.pearlgrey.entity.Donation;
import com.example.pearlgrey.service.DonationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("/api/donations")
public class DonationController {
	private final DonationService donationService;

	public DonationController(DonationService donationService) {
		this.donationService = donationService;
	}

	@PostMapping
	public ResponseEntity<Donation> addDonation(@Valid @RequestBody DonationDTO dto) {
		// debug: log incoming DTO to help diagnose binding/validation issues in tests
		System.out.println("[DEBUG] Received DonationDTO: donorName=" + dto.getDonorName()
				+ ", itemName=" + dto.getItemName() + ", category=" + dto.getCategory()
				+ ", quantity=" + dto.getQuantity() + ", dateReceived=" + dto.getDateReceived());
		Donation saved = donationService.addDonation(dto);
		return ResponseEntity.ok(saved);
	}

	@GetMapping
	public ResponseEntity<List<Donation>> getAll() {
		return ResponseEntity.ok(donationService.getAll());
	}
}

package com.example.pearlgrey.controller;

import com.example.pearlgrey.service.ReportService;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.ByteArrayInputStream;

@RestController
@RequestMapping("/api/reports")
public class ReportController {
	private final ReportService reportService;

	public ReportController(ReportService reportService) {
		this.reportService = reportService;
	}

	@GetMapping(value = "/donations/csv", produces = "text/csv")
	public ResponseEntity<InputStreamResource> downloadDonationsCsv() {
		ByteArrayInputStream in = reportService.generateDonationsCsv();
		InputStreamResource resource = new InputStreamResource(in);
		return ResponseEntity.ok()
				.header("Content-Disposition", "attachment; filename=donations.csv")
				.contentType(MediaType.parseMediaType("text/csv"))
				.body(resource);
	}

	@GetMapping(value = "/donations/pdf", produces = MediaType.APPLICATION_PDF_VALUE)
	public ResponseEntity<InputStreamResource> downloadDonationsPdf() {
		ByteArrayInputStream in = reportService.generateDonationsPdf();
		InputStreamResource resource = new InputStreamResource(in);
		return ResponseEntity.ok()
				.header("Content-Disposition", "attachment; filename=donations.pdf")
				.contentType(MediaType.APPLICATION_PDF)
				.body(resource);
	}
}

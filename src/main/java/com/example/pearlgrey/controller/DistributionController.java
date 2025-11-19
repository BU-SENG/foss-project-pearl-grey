package com.example.pearlgrey.controller;

import com.example.pearlgrey.dto.DistributionDTO;
import com.example.pearlgrey.entity.Distribution;
import com.example.pearlgrey.service.DistributionService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/distributions")
public class DistributionController {
    private final DistributionService distributionService;

    public DistributionController(DistributionService distributionService) {
        this.distributionService = distributionService;
    }

    @PostMapping
    public ResponseEntity<Distribution> recordDistribution(@Valid @RequestBody DistributionDTO dto) {
        Distribution saved = distributionService.recordDistribution(dto);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/total")
    public ResponseEntity<Integer> totalDistributed(@RequestParam String itemName) {
        return ResponseEntity.ok(distributionService.totalDistributed(itemName));
    }
}

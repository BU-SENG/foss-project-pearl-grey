package com.example.pearlgrey.service;


import com.example.pearlgrey.dto.InventoryDTO;
import com.example.pearlgrey.dto.SummaryDTO;
import com.example.pearlgrey.repository.DonationRepository;
import com.example.pearlgrey.repository.DistributionRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class InventoryService {
    private final DonationRepository donationRepository;
    private final DistributionRepository distributionRepository;

    public InventoryService(DonationRepository donationRepository, DistributionRepository distributionRepository) {
        this.donationRepository = donationRepository;
        this.distributionRepository = distributionRepository;
    }

    public List<InventoryDTO> getInventory() {
        List<String> items = donationRepository.findDistinctItemNames();
        List<InventoryDTO> result = new ArrayList<>();
        for(String item: items) {
            Integer rec = donationRepository.totalReceivedByItem(item);
            Integer dist = distributionRepository.totalDistributedByItem(item);
            int received = rec == null ? 0 : rec;
            int distributed = dist == null ? 0 : dist;
            int remaining = received - distributed;
            result.add(new InventoryDTO(item, received, distributed, remaining));
        }
        return result;
    }

    public List<SummaryDTO> getPublicSummary() {
        List<InventoryDTO> inv = getInventory();
        List<SummaryDTO> s = new ArrayList<>();
        for(InventoryDTO i: inv){
            s.add(new SummaryDTO(i.getItemName(), i.getReceived(), i.getDistributed(), i.getRemaining()));
        }
        return s;
    }
}


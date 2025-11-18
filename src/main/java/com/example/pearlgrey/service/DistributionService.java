package com.example.pearlgrey.service;


import com.example.pearlgrey.dto.DistributionDTO;
import com.example.pearlgrey.entity.Distribution;
import com.example.pearlgrey.repository.DistributionRepository;
import com.example.pearlgrey.repository.DonationRepository;
import org.springframework.stereotype.Service;

@Service
public class DistributionService {
    private final DistributionRepository distributionRepository;
    private final DonationRepository donationRepository;

    public DistributionService(DistributionRepository distributionRepository, DonationRepository donationRepository) {
        this.distributionRepository = distributionRepository;
        this.donationRepository = donationRepository;
    }

    public Distribution recordDistribution(DistributionDTO dto) {
        // check remaining
        Integer received = donationRepository.totalReceivedByItem(dto.getItemName());
        if(received == null) received = 0;
        Integer distributedSoFar = distributionRepository.totalDistributedByItem(dto.getItemName());
        if(distributedSoFar == null) distributedSoFar = 0;

        int remaining = received - distributedSoFar;
        if(dto.getQuantity() > remaining) {
            throw new RuntimeException("Not enough inventory for item: " + dto.getItemName());
        }

        Distribution dist = new Distribution();
        dist.setItemName(dto.getItemName());
        dist.setRecipient(dto.getRecipient());
        dist.setQuantity(dto.getQuantity());
        dist.setDateGiven(dto.getDateGiven());
        return distributionRepository.save(dist);
    }

    public int totalDistributed(String itemName){
        Integer v = distributionRepository.totalDistributedByItem(itemName);
        return v == null ? 0 : v;
    }
}


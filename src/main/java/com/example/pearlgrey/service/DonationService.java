package com.example.pearlgrey.service;

import com.example.pearlgrey.dto.DonationDTO;
import com.example.pearlgrey.entity.Donation;
import com.example.pearlgrey.repository.DonationRepository;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class DonationService {
    private final DonationRepository donationRepository;

    public DonationService(DonationRepository donationRepository) {
        this.donationRepository = donationRepository;
    }

    public Donation addDonation(DonationDTO dto) {
        Donation donation = new Donation();
        donation.setDonorName(dto.getDonorName());
        donation.setItemName(dto.getItemName());
        donation.setCategory(dto.getCategory());
        donation.setQuantity(dto.getQuantity());
        donation.setDateReceived(dto.getDateReceived());
        return donationRepository.save(donation);
    }

    public List<Donation> getAll() {
        return donationRepository.findAll();
    }

    public int totalReceived(String itemName) {
        // Ensure your Repository has a custom query or method for 'totalReceivedByItem'
        // e.g. @Query("SELECT SUM(d.quantity) FROM Donation d WHERE d.itemName = :itemName")
        Integer v = donationRepository.totalReceivedByItem(itemName);
        return v == null ? 0 : v;
    }
}
package com.example.pearlgrey.repository;

import com.example.pearlgrey.entity.Donation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface DonationRepository extends JpaRepository<Donation, Long> {
    List<Donation> findByItemName(String itemName);

    @Query("SELECT COALESCE(SUM(d.quantity),0) FROM Donation d WHERE d.itemName = :itemName")
    Integer totalReceivedByItem(String itemName);

    @Query("SELECT DISTINCT d.itemName FROM Donation d")
    List<String> findDistinctItemNames();
}
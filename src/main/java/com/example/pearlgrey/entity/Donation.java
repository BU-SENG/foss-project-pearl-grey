package com.example.pearlgrey.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "donations")
public class Donation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String donorName;
    private String itemName;
    private String category;
    private int quantity;
    private LocalDate dateReceived;

    // No-arg constructor
    public Donation() {}

    // All-arg constructor
    public Donation(Long id, String donorName, String itemName, String category, int quantity, LocalDate dateReceived) {
        this.id = id;
        this.donorName = donorName;
        this.itemName = itemName;
        this.category = category;
        this.quantity = quantity;
        this.dateReceived = dateReceived;
    }

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getDonorName() { return donorName; }
    public void setDonorName(String donorName) { this.donorName = donorName; }

    public String getItemName() { return itemName; }
    public void setItemName(String itemName) { this.itemName = itemName; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { this.quantity = quantity; }

    public LocalDate getDateReceived() { return dateReceived; }
    public void setDateReceived(LocalDate dateReceived) { this.dateReceived = dateReceived; }
}

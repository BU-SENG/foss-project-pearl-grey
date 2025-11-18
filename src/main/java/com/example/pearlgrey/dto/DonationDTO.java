package com.example.pearlgrey.dto;

import java.time.LocalDate;

public class DonationDTO {
    private String donorName;
    private String itemName;
    private String category;
    private int quantity;
    private LocalDate dateReceived;

    public DonationDTO() {}

    public DonationDTO(String donorName, String itemName, String category, int quantity, LocalDate dateReceived) {
        this.donorName = donorName;
        this.itemName = itemName;
        this.category = category;
        this.quantity = quantity;
        this.dateReceived = dateReceived;
    }

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
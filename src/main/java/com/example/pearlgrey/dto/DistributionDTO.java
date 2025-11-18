package com.example.pearlgrey.dto;

import java.time.LocalDate;

public class DistributionDTO {
    private String itemName;
    private String recipient;
    private int quantity;
    private LocalDate dateGiven;

    public DistributionDTO() {}

    public DistributionDTO(String itemName, String recipient, int quantity, LocalDate dateGiven) {
        this.itemName = itemName;
        this.recipient = recipient;
        this.quantity = quantity;
        this.dateGiven = dateGiven;
    }

    public String getItemName() { return itemName; }
    public void setItemName(String itemName) { this.itemName = itemName; }

    public String getRecipient() { return recipient; }
    public void setRecipient(String recipient) { this.recipient = recipient; }

    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { this.quantity = quantity; }

    public LocalDate getDateGiven() { return dateGiven; }
    public void setDateGiven(LocalDate dateGiven) { this.dateGiven = dateGiven; }
}
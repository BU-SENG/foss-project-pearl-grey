package com.example.pearlgrey.dto;

public class SummaryDTO {
    private String itemName;
    private int received;
    private int distributed;
    private int remaining;

    public SummaryDTO() {}

    public SummaryDTO(String itemName, int received, int distributed, int remaining) {
        this.itemName = itemName;
        this.received = received;
        this.distributed = distributed;
        this.remaining = remaining;
    }

    public String getItemName() { return itemName; }
    public void setItemName(String itemName) { this.itemName = itemName; }

    public int getReceived() { return received; }
    public void setReceived(int received) { this.received = received; }

    public int getDistributed() { return distributed; }
    public void setDistributed(int distributed) { this.distributed = distributed; }

    public int getRemaining() { return remaining; }
    public void setRemaining(int remaining) { this.remaining = remaining; }
}

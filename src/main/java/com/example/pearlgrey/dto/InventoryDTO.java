package com.example.pearlgrey.dto;

import lombok.*;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class InventoryDTO {
    private String itemName;
    private int received;
    private int distributed;
    private int remaining;
}
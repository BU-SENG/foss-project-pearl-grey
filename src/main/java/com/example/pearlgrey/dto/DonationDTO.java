package com.example.pearlgrey.dto;
import lombok.*;
import java.time.LocalDate;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class DonationDTO {
    private String donorName;
    private String itemName;
    private String category;
    private int quantity;
    private LocalDate dateReceived;
}
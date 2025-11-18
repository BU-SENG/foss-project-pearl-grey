package com.example.pearlgrey.dto;

import lombok.*;
import java.time.LocalDate;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class DistributionDTO {
    private String itemName;
    private String recipient;
    private int quantity;
    private LocalDate dateGiven;
}
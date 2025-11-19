package com.example.pearlgrey.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.*;
import java.time.LocalDate;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class DonationDTO {
    @NotBlank
    private String donorName;

    @NotBlank
    private String itemName;

    private String category;

    @Positive
    private int quantity;

    @NotNull
    private LocalDate dateReceived;
}
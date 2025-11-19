package com.example.pearlgrey.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.*;
import java.time.LocalDate;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class DistributionDTO {
    @NotBlank
    private String itemName;

    @NotBlank
    private String recipient;

    @Positive
    private int quantity;

    @NotNull
    private LocalDate dateGiven;
}
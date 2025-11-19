package com.example.pearlgrey.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
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
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateReceived;
}
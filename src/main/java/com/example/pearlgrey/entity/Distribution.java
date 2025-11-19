package com.example.pearlgrey.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Table(name = "distributions")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Distribution {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String itemName;
    private String recipient;
    private int quantity;
    private LocalDate dateGiven;
}

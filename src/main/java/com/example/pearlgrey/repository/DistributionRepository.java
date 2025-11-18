package com.example.pearlgrey.repository;

import com.example.pearlgrey.entity.Distribution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface DistributionRepository extends JpaRepository<Distribution, Long> {
    List<Distribution> findByItemName(String itemName);

    @Query("SELECT COALESCE(SUM(d.quantity),0) FROM Distribution d WHERE d.itemName = :itemName")
    Integer totalDistributedByItem(String itemName);
}

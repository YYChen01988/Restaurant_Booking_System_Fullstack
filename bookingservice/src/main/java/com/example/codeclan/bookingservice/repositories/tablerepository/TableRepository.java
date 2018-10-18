package com.example.codeclan.bookingservice.repositories.tablerepository;

import com.example.codeclan.bookingservice.models.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TableRepository extends JpaRepository<Table, Long> {
}

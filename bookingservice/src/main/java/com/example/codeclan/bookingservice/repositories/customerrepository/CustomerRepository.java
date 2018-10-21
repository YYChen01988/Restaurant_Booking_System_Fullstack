package com.example.codeclan.bookingservice.repositories.customerrepository;

import com.example.codeclan.bookingservice.models.Customer;

import com.example.codeclan.bookingservice.projections.EmbedCustomer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
}

package com.example.codeclan.bookingservice.repositories.bookingrepository;

import com.example.codeclan.bookingservice.models.Booking;
import com.example.codeclan.bookingservice.projections.EmbedCustomer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(excerptProjection = EmbedCustomer.class)
public interface BookingRepository extends JpaRepository<Booking, Long> {
}

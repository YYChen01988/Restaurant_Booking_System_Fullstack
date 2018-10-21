package com.example.codeclan.bookingservice.projections;

import com.example.codeclan.bookingservice.models.Booking;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name="embedCustomer", types= Booking.class)
public interface EmbedCustomer {
    long getId();
    String getName();
    int getAge();
    String getContact();
    List<Booking> getBookings();
}

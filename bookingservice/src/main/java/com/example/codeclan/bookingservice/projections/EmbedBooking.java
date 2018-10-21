package com.example.codeclan.bookingservice.projections;

import com.example.codeclan.bookingservice.models.Booking;
import com.example.codeclan.bookingservice.models.Customer;
import com.example.codeclan.bookingservice.models.Table;
import org.springframework.data.rest.core.config.Projection;

import java.time.LocalDateTime;
import java.util.List;

@Projection(name = "embedBooking", types = Customer.class )
public interface EmbedBooking {

    long getId();
    String getName();
    int getAge();
    String getContact();
    List<Booking> getBookings();

}


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
    Customer getCustomer();
    int getParty();
    LocalDateTime getStartTime();
    LocalDateTime getEndTime();
    Table getTable();
}


package com.example.codeclan.bookingservice.projections;

import com.example.codeclan.bookingservice.models.Booking;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name="EmbedTable", types = Booking.class)
public interface EmbedTable {

    long getId();
    int getCapacity();
    Boolean isReserved();
    List<Booking> getBookings();
}

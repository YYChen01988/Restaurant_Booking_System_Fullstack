package com.example.codeclan.bookingservice;

import com.example.codeclan.bookingservice.models.Booking;
import com.example.codeclan.bookingservice.models.Customer;
import com.example.codeclan.bookingservice.models.Table;
import org.junit.Before;
import org.junit.Test;

import java.time.LocalDateTime;

import static org.junit.Assert.assertEquals;

public class TableTest {

    Table table;
    Booking booking1, booking2, booking3;
    Customer customer1, customer2;

    @Before
    public void before(){
        customer1 = new Customer("Alice", 34, "Alice@gmail.com");
        customer2 = new Customer("Bob", 42, "BOB@gmail.com");
        table = new Table (4);
        LocalDateTime startTime1 = LocalDateTime.of(2018,10,19,16,30);
        LocalDateTime startTime2 = LocalDateTime.of(2018,10,19,18,00);

        booking1 = new Booking(customer1, 3, startTime1, table);
        booking2 = new Booking(customer2, 3, startTime2, table);
        booking3 = new Booking(customer2, 30, startTime2, table);

    }

    @Test
    public void canCheckIfSeatIsEnough(){
        assertEquals(true, table.enoughSeats(booking1));
        assertEquals(false, table.enoughSeats(booking3));
    }

    @Test
    public void canNotDoubleBooking() {
        table.addBooking(booking1);
        table.addBooking(booking2);
        assertEquals(false, table.notDoubeBooking(booking2));
    }

    //    @Test
//    public void canAddBooking(){
//        table.addBooking(booking1);
//        table.addBooking(booking2);
//        assertEquals(2, table.getBookings().size());
//
//    }
}

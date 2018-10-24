package com.example.codeclan.bookingservice.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@javax.persistence.Table(name="tables")
public class Table {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "table_number")
    private int tableNumber;

    @Column(name="capacity")
    private int capacity;

    @Column(name="reserved")
    private boolean reserved;

//    @JsonIgnoreProperties("table")
    @OneToMany(mappedBy = "table", fetch = FetchType.LAZY)
    private List<Booking> bookings;

    public Table(int tableNumber, int capacity) {
        this.tableNumber = tableNumber;
        this.capacity = capacity;
        this.reserved = false;
        this.bookings = new ArrayList<>();
    }

    public Table() {
    }


    public boolean enoughSeats(Booking booking){
        if (booking.getParty() <= this.capacity){
            return true;
        }
        return false;
    }

    public boolean notDoubleBooking(Booking booking1) {
        for (Booking booking : this.bookings) {
            if (booking1.getStartTime().isAfter(booking.getEndTime()) ||
                    booking1.getEndTime().isBefore(booking.getStartTime()))
            return true;
        }
        return false;
    }

    public void addBooking(Booking booking1){
        if(enoughSeats(booking1)){
            if (this.bookings.size() == 0){
                this.bookings.add(booking1);
                this.setReserved(true);
            } else{
                if(notDoubleBooking(booking1)){
                    this.bookings.add(booking1);
                    this.setReserved(true);
                }
            }
        }
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        this.Id = id;
    }

    public int getTableNumber() {
        return tableNumber;
    }

    public void setTableNumber(int tableNumber) {
        this.tableNumber = tableNumber;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public boolean isReserved() {
        return reserved;
    }

    public void setReserved(boolean reserved) {
        this.reserved = reserved;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }
}

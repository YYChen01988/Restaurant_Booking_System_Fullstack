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
    private Long id;
    @Column(name="capacity")
    private int capacity;
    @Column(name="reserved")
    private boolean reserved;

    @JsonIgnoreProperties("table")
    @OneToMany(mappedBy = "table", fetch = FetchType.LAZY)
    private List<Booking> bookings;

    public Table(int capacity) {
        this.capacity = capacity;
        this.reserved = false;
        this.bookings = new ArrayList<>();
    }

    public Table() {
    }

    public void addBooking(Booking booking1){
        if(booking1.getParty() <= this.getCapacity()){
            for(Booking booking : this.bookings){
                if(booking1.getStartTime().isAfter(booking.getEndtime())&&
                        booking1.getEndtime().isBefore(booking.getStartTime())){
                }
            }
            this.bookings.add(booking1);
            this.setReserved(true);
        }
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

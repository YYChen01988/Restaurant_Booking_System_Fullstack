package com.example.codeclan.bookingservice.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@javax.persistence.Table(name="bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name="party")
    private int party;
    @Column(name="start_time")
    private LocalDateTime startTime;
    @Column(name="end_time")
    private LocalDateTime endTime;

//    @JsonIgnoreProperties("table")
    @ManyToOne
    @JoinColumn (name = "table_id", nullable = false)
    private Table table;

    @ManyToOne
    @JoinColumn(name="customer_id", nullable = false)
    private Customer customer;


    public Booking(Customer customer, int party, LocalDateTime startTime, LocalDateTime endTime, Table table) {
        this.customer = customer;
        this.party = party;
        this.startTime = startTime;
        this.endTime = endTime;
        this.table = table;
    }

    public Booking() {
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        this.Id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public int getParty() {
        return party;
    }

    public void setParty(int party) {
        this.party = party;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public Table getTable() {
        return table;
    }

    public void setTable(Table table) {
        this.table = table;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    public void reserveTable(Table table){
        table.setReserved(true);
    }

}

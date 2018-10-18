package com.example.codeclan.bookingservice.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;

@Entity
@javax.persistence.Table(name="bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="party")
    private int party;
    @Column(name="date")
    private String date;

    @JsonIgnore
    @ManyToOne
    @JoinColumn (name = "table_id", nullable = false)
    private Table table;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="customer_id", nullable = false)
    private Customer customer;


    public Booking(Customer customer, int party, String date, Table table) {
        this.customer = customer;
        this.party = party;
        this.date = date;
        this.table = table;
    }

    public Booking() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Table getTable() {
        return table;
    }

    public void setTable(Table table) {
        this.table = table;
    }

}

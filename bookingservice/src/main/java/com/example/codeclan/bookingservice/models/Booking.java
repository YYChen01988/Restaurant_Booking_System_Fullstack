package com.example.codeclan.bookingservice.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@javax.persistence.Table(name="bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="customer")
    private Customer customer;
    @Column(name="party")
    private int party;
    @Column(name="date")
    private Date date;
    @Column(name="table")
    private Table table;

    public Booking(Customer customer, int party, Date date, Table table) {
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Table getTable() {
        return table;
    }

    public void setTable(Table table) {
        this.table = table;
    }
}

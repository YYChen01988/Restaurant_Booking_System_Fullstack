package com.example.codeclan.bookingservice.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name="name")
    private String name;

    @Column(name="age")
    private int age;

    @Column(name="contact")
    private String contact;

    @OneToMany(mappedBy= "customer", fetch = FetchType.LAZY)
    private List<Booking> bookings;

//    private String comment;


    public Customer(String name, int age, String contact) {
        this.name = name;
        this.age = age;
        this.contact = contact;
        this.bookings = new ArrayList<>();
    }

    public Customer() {
    }

    public void addBooking(Booking booking){
        this.bookings.add(booking);
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        this.Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }
}

package com.example.codeclan.bookingservice.models;

import javax.persistence.*;
import javax.persistence.Table;

@Entity
@Table(name="customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="name")
    private String name;
    @Column(name="age")
    private int age;
    @Column(name="contact")
    private String contact;
//    private String comment;


    public Customer(String name, int age, String contact) {
        this.name = name;
        this.age = age;
        this.contact = contact;
    }

    public Customer() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

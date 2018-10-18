package com.example.codeclan.bookingservice.models;

import javax.persistence.*;


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

    public Table(int capacity, boolean reserved) {

        this.capacity = capacity;
        this.reserved = false;
    }

    public Table() {
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
}

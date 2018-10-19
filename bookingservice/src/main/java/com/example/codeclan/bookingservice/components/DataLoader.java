package com.example.codeclan.bookingservice.components;

import com.example.codeclan.bookingservice.models.Booking;
import com.example.codeclan.bookingservice.models.Customer;
import com.example.codeclan.bookingservice.models.Table;
import com.example.codeclan.bookingservice.repositories.bookingrepository.BookingRepository;
import com.example.codeclan.bookingservice.repositories.customerrepository.CustomerRepository;
import com.example.codeclan.bookingservice.repositories.tablerepository.TableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Date;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    BookingRepository bookingRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    TableRepository tableRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args){

        LocalDateTime startTime1 = LocalDateTime.of(2018,10,19,16,30);


//        String endTime1 = new String("11-10-18 12:30");
//        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(startTime1);
//        startTime1 = simpleDateFormat.format(new Date());

        Customer customer1 = new Customer("Jobby McJobface", 30, "jobby@gmail.com");
        customerRepository.save(customer1);

        Table table1 = new Table(4);
        tableRepository.save(table1);

        Booking booking1 = new Booking(customer1, 1, startTime1, table1 );
        bookingRepository.save(booking1);
    }
}

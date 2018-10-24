package com.example.codeclan.bookingservice;

import com.example.codeclan.bookingservice.models.Booking;
import com.example.codeclan.bookingservice.models.Customer;
import com.example.codeclan.bookingservice.models.Table;
import com.example.codeclan.bookingservice.repositories.bookingrepository.BookingRepository;
import com.example.codeclan.bookingservice.repositories.customerrepository.CustomerRepository;
import com.example.codeclan.bookingservice.repositories.tablerepository.TableRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDateTime;

import static junit.framework.TestCase.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BookingserviceApplicationTests {

    Customer customer1;
    Table table1;
    Booking booking1;
    LocalDateTime startTime1;
    LocalDateTime endTime1;

//    @Autowired
//    BookingRepository bookingRepository;
//
//    @Autowired
//    CustomerRepository customerRepository;
//
//    @Autowired
//    TableRepository tableRepository;

	@Test
	public void contextLoads() {
	}

    @Before
    public void setUp() throws Exception {

        LocalDateTime startTime1 = LocalDateTime.of(2018,10,19,16,30);
        Customer customer1 = new Customer("Jobby McJobface", 30, "jobby@number2.com");
        Table table1 = new Table(1, 1);
        Booking booking1 = new Booking(customer1, 1, startTime1, endTime1, table1 );
    }

//    @Test
//    public void customerHasName() {
//	    assertEquals("Jobby McJobface", customer1.getName());
//    }

    @Test
    public void canAddBooking() {
	    table1.addBooking(booking1);
	    assertEquals(true, table1.isReserved());
    }
}

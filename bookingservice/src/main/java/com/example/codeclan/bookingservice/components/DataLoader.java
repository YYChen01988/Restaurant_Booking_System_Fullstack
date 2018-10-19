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


        Customer customer1 = new Customer("Jobby McJobface", 30, "jobby@number2.com");
        customerRepository.save(customer1);
        Customer customer2 = new Customer("Andrew Craigie", 50, "andyc@pimping.co.uk");
        customerRepository.save(customer2);
        Customer customer3 = new Customer("Anne Ince", 65, "anniebeats@pensioner.com");
        customerRepository.save(customer3);
        Customer customer4 = new Customer("Christian Geib", 41, "cgibblet@gurgles.de");
        customerRepository.save(customer4);
        Customer customer5 = new Customer("Connie Leighton", 30, "constl@wewearpink.co.uk");
        customerRepository.save(customer5);
        Customer customer6 = new Customer("Craig Bowditch", 21, "bowieditch@patagonia.co.uk");
        customerRepository.save(customer6);
        Customer customer7 = new Customer("Fiona Wilson", 31, "princessfiona@datascience.co.uk");
        customerRepository.save(customer7);
        Customer customer8 = new Customer("Fraser Douglas", 37, "fdawg@nwa.co.uk");
        customerRepository.save(customer8);
        Customer customer9 = new Customer("Jane Duncan", 45, "duncthesink@gitpumped.com");
        customerRepository.save(customer9);
        Customer customer10 = new Customer("Kaspars Dzerins", 18, "grumpyrussian@fiery.ru");
        customerRepository.save(customer10);
        Customer customer11 = new Customer("Kirsty Bruce", 42, "thebruce@bruce.co.uk");
        customerRepository.save(customer11);
        Customer customer12 = new Customer("Pim Groeneveld", 21, "groovemoves@catty.nl");
        customerRepository.save(customer12);
        Customer customer13 = new Customer("Ricky Corrigan", 26, "stickyricky@seamen.co.uk");
        customerRepository.save(customer13);
        Customer customer14 = new Customer("Robert Deignan", 19, "rabd@revan.co.uk");
        customerRepository.save(customer14);
        Customer customer15 = new Customer("Shannon Holmes", 35, "shanzyh@eget.ca");
        customerRepository.save(customer15);
        Customer customer16 = new Customer("Sithara Sukumar", 18, "sithsuku@empire.in");
        customerRepository.save(customer16);
        Customer customer17 = new Customer("Kirsty Bruce", 18, "thebruce@bruce.co.uk");
        customerRepository.save(customer17);
        Customer customer18 = new Customer("Tanny Qureshi", 41, "tbone@nwa.co.uk");
        customerRepository.save(customer18);
        Customer customer19 = new Customer("YingYing Chen", 22, "yingster@triads.tw");
        customerRepository.save(customer19);
        Customer customer20 = new Customer("Chris Nolan", 48, "bignolan@syncopy.co.uk");
        customerRepository.save(customer20);
        Customer customer21 = new Customer("Patrick Bateman", 25, "master@bater.com");
        customerRepository.save(customer21);
        Customer customer22 = new Customer("Vladimir Lenin", 53, "lenin@soviet.ru");
        customerRepository.save(customer22);
        Customer customer23 = new Customer("Arnold Schwarzenegger", 71, "arnie@hammer.au");
        customerRepository.save(customer23);
        Customer customer24 = new Customer("Usain Bolt", 32, "thelightning@bolt.jm");
        customerRepository.save(customer24);
        Customer customer25 = new Customer("Thor Odinson", 18, "godofthunder@asgard.as");
        customerRepository.save(customer25);
        Customer customer26 = new Customer("Chandler Bing", 24, "badabing@gadoosh.com");
        customerRepository.save(customer26);
        Customer customer27 = new Customer("Gordon Ramsay", 51, "raw@chicken.com");
        customerRepository.save(customer27);
        Customer customer28 = new Customer("Emma Watson", 28, "hermionegranger@hogwarts.hp");
        customerRepository.save(customer28);
        Customer customer29 = new Customer("Dwayne Johnson", 46, "dwayne@betweenarockandahartplace.com");
        customerRepository.save(customer29);
        Customer customer30 = new Customer("Kevin Hart", 39, "kevin@betweenarockandahartplace.com");
        customerRepository.save(customer30);

        Table table1 = new Table(2);
        tableRepository.save(table1);
        Table table2 = new Table(2);
        tableRepository.save(table2);
        Table table3 = new Table(2);
        tableRepository.save(table3);
        Table table4 = new Table(4);
        tableRepository.save(table4);
        Table table5 = new Table(4);
        tableRepository.save(table5);
        Table table6 = new Table(4);
        tableRepository.save(table6);
        Table table7 = new Table(6);
        tableRepository.save(table7);
        Table table8 = new Table(6);
        tableRepository.save(table8);
        Table table9 = new Table(8);
        tableRepository.save(table9);
        Table table10 = new Table(10);
        tableRepository.save(table10);

        Booking booking1 = new Booking(customer1, 1, startTime1, table1 );
        bookingRepository.save(booking1);
    }
}

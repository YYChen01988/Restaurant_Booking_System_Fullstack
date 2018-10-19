package com.example.codeclan.bookingservice.repositories.bookingrepository;

import com.example.codeclan.bookingservice.models.Booking;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

public class BookingRepositoryImpl implements BookingRepositoryCustom{
    @Autowired
    EntityManager entityManager;

//    @Transactional
//    public List<Booking> getBookingsForDate(String date){
//
//        List<Booking> bookings = null;
//        Session session = entityManager.unwrap(Session.class);
//
//        try {
//            Criteria cr = session.createCriteria(Booking.class);
//            cr.add(Restrictions.like("startTime", date));
//            bookings = cr.list();
//        } catch (HibernateException e) {
//            e.printStackTrace();
//        } finally {
//            session.close();
//        }
//
//        return bookings;
//    }

}


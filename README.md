# Restaurant_Booking_System_Fullstack

## Restaurant Booking System:

You have been tasked to create a booking system for a brand new restaurant. The restaurant needs a way to book and arrange tables for customers who are booking over the phone. This system is for the staff to use.


![Bookings Page](planning/bookings-page.png)

## How to run the app 

Download the repo and enter the following into the console whilst in the root directory: 

```bash
createdb bookingservice
open -a IntelliJ\ IDEA\ CE bookingservice
right click BookingServiceApplication in bookingservice/src/main/java/com/example/codeclan/bookingservice/BookingserviceApplication.java, click Run
cd restaurantfrontend 
npm i
npm start
```
Open http://localhost:3000/ to view the homepage.

### MVP:

Your system must be able to:

* Allow a customer to book a table at the restaurant for a particular time and date
* Update a booking, for example if the customer wants to change a booking time
* Display a list of bookings for a given date
* Display a list of customers ordered by frequency of visits

### Project Extensions:

* Don't allow double bookings
* Add a customer's receipt to a booking so you can view their previous orders and how much they spent
* Calculate how much a customer has spent over a given period of time
* Give discounts to frequent customers
* Whatever features you think would be beneficial to a restaurant

## Do What You Like

If none of the other project ideas float your ⛵️, you can take on a project of your own.

Your project must meet the following specification:

- It must be a React / Spring web app
- It must contain a number of associations between classes - one to many, many to many etc.
- It must contain some custom logic - this could be filtering, sorting etc.
- Unlike with the other projects you can use any framework or library you want to achieve your goal. (Within reason)

Before you start this project, write an MVP and potential extensions. You **must** get this signed off by an instructor before proceeding.


## TODO

- Add logo
- Add date of birth instead of age(can still calculate age), phone number, address for customers
- Adds search bar to find customer?

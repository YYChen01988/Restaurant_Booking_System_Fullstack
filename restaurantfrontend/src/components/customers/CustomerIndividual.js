import React from 'react';
import moment from 'moment';

const CustomerIndividual = props => {
  console.log(props);
  if(!props.customer){
    return null
  }

  let numberOfVisits = 0;
  if (props.customer.bookings) {
    numberOfVisits = Object.keys(props.customer.bookings).length
  };

  const bookings = props.customer.bookings.map((booking, index) => {
    console.log(booking);
    let date = new Date(booking.startTime);
    let formattedDate = moment(date).format("DD-MM-YY HH:mm");
    return <li key={index}>{formattedDate}</li>
  })

  return (
    <React.Fragment>
      <h1>Customer: {props.customer.name}</h1>
      <div className="form-container">
        <p>Age: {props.customer.age}</p>
        <p>Contact: {props.customer.contact}</p>
        <p>Visits: {numberOfVisits}</p>
        <p>Booking(s) {bookings}</p>
      </div>
    </React.Fragment>
  );
}

export default CustomerIndividual;

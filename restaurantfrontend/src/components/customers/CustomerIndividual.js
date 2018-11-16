import React from 'react';
import moment from 'moment';

const CustomerIndividual = props => {
  console.log(props);
  if(!props.customer) return null;
  else if (Object.keys(props.customer.bookings).length === 0) return (<h1>No Bookings for {props.customer.name}</h1>);


  let numberOfVisits = 0;
  if (props.customer.bookings) {
    numberOfVisits = Object.keys(props.customer.bookings).length
  };

  const bookings = props.customer.bookings.map((booking, index) => {
    console.log(booking);
    let date = new Date(booking.startTime);
    let formattedDate = moment(date).format("DD-MM-YY HH:mm");
    return <p key={index}>{formattedDate}</p>
  })

  return (
    <React.Fragment>
      <h1>Customer: {props.customer.name}</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Contact</th>
            <th>Visits</th>
            <th>Bookings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.customer.name}</td>
            <td>{props.customer.age}</td>
            <td>{props.customer.contact}</td>
            <td>{numberOfVisits}</td>
            <td>{bookings}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default CustomerIndividual;

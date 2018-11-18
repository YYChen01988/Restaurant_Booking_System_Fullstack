import React from 'react';
import moment from 'moment';

const TableIndividual = (props) => {
  if (!props.table) return null;
  else if (!props.table._embedded) return (<h1>No Bookings for Table {props.table.tableNumber}</h1>);

  const bookings = props.table._embedded.bookings.map((booking, index) => {
    return <p key={index}>{booking}</p>;
  })

  const bookingDate = bookings.map((booking, index) => {
    let date = new Date(booking.props.children.startTime);
    let formattedDate = moment(date).format("DD-MM-YY HH:mm");
    return <p key={index}>{formattedDate}</p>
  })

  const customers = bookings.map((booking, index) => {
    let customerName = booking.props.children.customer.name;
    return <p key={index}>{customerName}</p>
  })

  return (
    <React.Fragment>
      <h1>Table {props.table.tableNumber}</h1>
      <table>
        <thead>
          <tr>
            <th>Table Number</th>
            <th>Capacity</th>
            <th>Customer</th>
            <th>Bookings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.table.tableNumber}</td>
            <td>{props.table.capacity}</td>
            <td>{customers}</td>
            <td>{bookingDate}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default TableIndividual;

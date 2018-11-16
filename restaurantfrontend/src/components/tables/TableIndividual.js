import React from 'react';
import moment from 'moment';

const TableIndividual = (props) => {
  console.log(props);
  if (!props) return null;
  // else if (!props.table) return (<h1>No Bookings for Table {props.table.tableNumber}</h1>);

  // const customers = props.map((booking, index) => {
  //   let customerName = booking.props.children.customer.name;
  //   return (
  //     <tr>
  //       <td key={index}>{customerName}</td>
  //     </tr>
  //   )
  // })
  //
  // const bookingDate = props.tables.map((booking, index) => {
  //   let date = new Date(booking.props.children.startTime);
  //   let formattedDate = moment(date).format("DD-MM-YY HH:mm");
  //   return (
  //     <tr>
  //       <td key={index}>{formattedDate}</td>
  //     </tr>
  //   )
  // })

  return (
    <tr>
      {/* <td>{customers}</td> */}
      {/* <td>{bookingDate}</td> */}
    </tr>
  )
}

export default TableIndividual;

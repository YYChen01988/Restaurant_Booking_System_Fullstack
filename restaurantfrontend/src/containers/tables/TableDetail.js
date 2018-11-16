import React from 'react';
import moment from 'moment';
import TableIndividual from '../../components/tables/TableIndividual'

const TableDetail = (props) => {
  if (!props.bookings) return (<h1>No Bookings for Table {props.table}</h1>);
  console.log(props);
  console.log(props.bookings);
  console.log(props.bookings[0].table.tableNumber);

  const bookings = props.bookings.map((booking, index) => {
    return <TableIndividual booking={booking} key={index}/>
  })


  // const bookingDate = bookings.map((booking, index) => {
  //   let date = new Date(booking.props.children.startTime);
  //   let formattedDate = moment(date).format("DD-MM-YY HH:mm");
  //   return (
  //     <tr>
  //       <td key={index}>{formattedDate}</td>
  //     </tr>
  //   )
  // })
  //
  // const customers = bookings.map((booking, index) => {
  //   let customerName = booking.props.children.customer.name;
  //   return (
  //     <tr>
  //       <td key={index}>{customerName}</td>
  //     </tr>
  //   )
  // })

  return (
    <React.Fragment>
      <h1>Table {props.bookings.table.tableNumber}</h1>
      <table>
        <tbody>
          <tr>
            <th>Customer</th>
            <th>Booking Date</th>
          </tr>
          {bookings}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default TableDetail;

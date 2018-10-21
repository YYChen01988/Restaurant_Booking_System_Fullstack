import React from 'react';

const Customer = (props) => {

  const url = "/customers/" + props.customer.id
  return (
    <tr>
      <td><a href={url}>{props.customer.name}</a></td>
      <td>{props.customer.age}</td>
      <td>{props.customer.contact}</td>
      <td>Booking goes here</td>
      {/* <td>{props.customer.bookings}</td> */}
    </tr>
  )
}

export default Customer;

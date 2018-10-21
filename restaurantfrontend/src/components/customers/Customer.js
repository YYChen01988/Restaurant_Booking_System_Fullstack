import React from 'react';

const Customer = (props) => {

  const url = "/customers/" + props.customer.id
  return (
    <tr>
      <td>{props.customer.name}</td>
      <td>{props.customer.age}</td>
      <td>{props.customer.contact}</td>
      <td>{props.customer.bookings}</td>
    </tr>
  )
}

export default Customer;

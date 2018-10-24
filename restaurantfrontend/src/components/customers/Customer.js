import React from 'react';

const Customer = (props) => {
  let numberOfVisits = 0;
  if (props.customer.bookings) {
    numberOfVisits = Object.keys(props.customer.bookings).length
  };
  const url = "/customers/" + props.customer.id
  return (
    <tr>
      <td><a href={url}>{props.customer.name}</a></td>
      <td>{props.customer.age}</td>
      <td>{props.customer.contact}</td>
      <td>{numberOfVisits}</td>
    </tr>
  )
}

export default Customer;

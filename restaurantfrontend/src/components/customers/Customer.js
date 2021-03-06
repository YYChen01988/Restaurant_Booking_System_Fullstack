import React from 'react';

const Customer = (props) => {
  let numberOfVisits = 0;
  if (props.customer.bookings) {
    numberOfVisits = Object.keys(props.customer.bookings).length
  };

  const url = "/customers/" + props.customer.id
  const editUrl = "/customers/" + props.customer.id + "/edit"

  return (
    <tr>
      <td><a href={editUrl}>{props.customer.name}</a></td>
      <td>{props.customer.age}</td>
      <td>{props.customer.contact}</td>
      <td><a href={url}>{numberOfVisits}</a></td>
    </tr>
  )
}

export default Customer;

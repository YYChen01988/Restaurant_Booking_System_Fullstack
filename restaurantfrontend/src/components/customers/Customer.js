import React from 'react';

const Customer = (props) => {
  // console.log(props);
  const url = "/customers/" + props.customer.id
  return (
    <tr>
      <td><a href={url}>{props.customer.name}</a></td>
      <td>{props.customer.age}</td>
      <td>{props.customer.contact}</td>
      <td>{props.customer._embedded.bookings.party}</td>
      {/* <td>{Object.keys(props.customer._embedded.bookings).length}</td> */}
    </tr>
  )
}

export default Customer;

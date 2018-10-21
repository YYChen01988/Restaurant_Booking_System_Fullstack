import React from 'react';

const Customer = (props) => {

  const url = "/customers/" + props.customer.id
  return (
    <div className="component">
      <a href={url}>
        <p className="customer">
          {props.customer.name}
        </p>
      </a>
      <p className="customer">
        {props.customer.age}
      </p>
      <p className="customer">
        {props.customer.contact}
      </p>
      <p className="customer">
        Bookings go here
      </p>
    </div>
  )
}

export default Customer;

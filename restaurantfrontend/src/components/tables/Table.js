import React from 'react';

const Table = (props) => {

  const url = "/tables/"
  return (
    <tr>
      <td>{props.table.capacity}</td>
      <td>{props.table.reserved}</td>
      <td>{props.table.bookings}</td>
    </tr>
  )
}

export default Table;

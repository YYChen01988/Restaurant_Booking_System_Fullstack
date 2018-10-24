import React from 'react';

const Table = (props) => {

  const url = "/tables/" + props.table.id
  return (
    <tr>
      <td><a href={url}>{props.table.tableNumber}</a></td>
      <td>{props.table.capacity}</td>
      <td>{String(props.table.reserved)}</td>
      <td>Booking goes here</td>
    </tr>
  )
}

export default Table;

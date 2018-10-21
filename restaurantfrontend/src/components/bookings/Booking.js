import React from 'react';

const Booking = (props) => {

	// const bookings =
	return (
		<tr>
			{/* <td>{props.booking.customer}</td> */}
			<td>{props.booking.party}</td>
			<td>{props.booking.startTime}</td>
			<td>{props.booking.endTime}</td>
			{/* <td>{props.booking.table}</td> */}
		</tr>
	)
}

export default Booking;

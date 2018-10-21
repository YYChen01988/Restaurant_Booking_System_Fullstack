import React from 'react';
import moment from 'moment';

const Booking = (props) => {
	let date1 = new Date(props.booking.startTime);
	let formattedStartTime = moment(date1).format("DD-MM-YY HH:mm")
	let date2 = new Date(props.booking.endTime);
	let formattedEndTime = moment(date2).format("DD-MM-YY HH:mm")

	return (
		<tr>
			{/* <td>{props.booking.customer}</td> */}
			<td>Customer goes here</td>
			<td>{props.booking.party}</td>
			<td>{formattedStartTime}</td>
			<td>{formattedEndTime}</td>
			<td>Table goes here</td>
			{/* <td>{props.booking.table}</td> */}
		</tr>
	)
}

export default Booking;

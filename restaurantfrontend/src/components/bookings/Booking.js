import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const Booking = (props) => {
	let date1 = new Date(props.booking.startTime);
	let formattedStartTime = moment(date1).format("DD-MM-YY HH:mm")
	let date2 = new Date(props.booking.endTime);
	let formattedEndTime = moment(date2).format("DD-MM-YY HH:mm")

	const url = "/bookings/" + props.booking.id + "/edit"
	return (
		<tr>
			<td><a href={url}>{props.booking.customer.name}</a></td>
			<td>{props.booking.party}</td>
			<td>{formattedStartTime}</td>
			<td>{formattedEndTime}</td>
			<td>{props.booking.table.tableNumber}</td>
		</tr>
	)
}

export default Booking;

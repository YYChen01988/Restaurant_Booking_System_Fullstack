import React from 'react';
import moment from 'moment';
import Booking from '../../components/bookings/Booking';

const BookingList = (props) => {
	const formattedFilteredDate = moment(props.filterDate).format("DD-MM-YY")
	const allBookings = props.bookings.map((booking) => {
		return <Booking booking={booking} key={booking.id}/>
	})

	const selectedBooking = allBookings.filter((booking) => {
		const filteredStartTime = moment(booking.props.booking.startTime).format("DD-MM-YY");
		if (filteredStartTime === formattedFilteredDate) {
			return <Booking booking={booking} key={booking.id}/>
		}
	})

	return (
		<div className="booking-list">
			<h1 className="heading">Bookings for {formattedFilteredDate}</h1>
			<table className="booking-table">
				<tbody>
					<tr>
						<th>Customer</th>
						<th>People</th>
						<th>Start Time</th>
						<th>End Time</th>
						<th>Table</th>
					</tr>
					{selectedBooking}
				</tbody>
			</table>
		</div>
	)
}

export default BookingList;

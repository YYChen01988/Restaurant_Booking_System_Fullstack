import React from 'react';
import Booking from '../../components/bookings/Booking'

const BookingList = (props) => {
	const allBookings = props.bookings.map((booking) => {
		return <Booking booking={booking} key={booking.id}/>
	})

	return (
		<div className="booking-list">
				<h1 className="heading">Bookings</h1>


				<table className="booking-table">
					<tbody>
						<tr>
							<th>Customer</th>
							<th>Party Size</th>
							<th>Start Time</th>
							<th>End Time</th>
							<th>Table</th>
						</tr>
						{allBookings}
					</tbody>
				</table>
			</div>
	)
}

export default BookingList;

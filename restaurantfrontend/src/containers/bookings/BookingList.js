import React from 'react';
import Booking from '../../components/bookings/Booking'

const BookingList = (props) => {
		const allBookings = props.bookings.map((booking) => {
			return <li key={booking.id} className="component-item">
			<Booking booking={booking}/>
			</li>
		})

		return (
			<ul className="component-list">
				{allBookings}
			</ul>
		)
	}

export default BookingList;

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

	function handleFormDisplay(){
		const form = document.querySelector('booking-form')
		form.classList.remove("hidden");
	}

	const options = props.bookings.map((booking, index) => {
		return <option key={index} value={booking._links.self.href}>{booking.name}</option>
	})


	return (
		<div className="booking-list">
			<button onClick={handleFormDisplay}>Create new booking</button>
			<form id="booking-form" className="form-container">
			<input type="text" placeholder="Name" name="name" required/>
			<input type="number" placeholder="Age" name="age" min="12"/>
			<input type="text" placeholder="Contact" name="contact" required/>
			<input type="datetime-local" placeholder="DateTime" name="datetime" required/>
			<select name="booking">
			{options}
		</select>
		<input type="date" name=""/>
		<button type="submit">Save</button>
		</form>
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

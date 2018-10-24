import React from 'react';
import Customer from '../../components/customers/Customer'

const CustomerList = (props) => {
	if(!props.customers){
		return null
	}

	const sortedCustomers = props.customers.sort((a, b) => {
		console.log("A", [Object.keys(a.bookings)]);
		console.log("B", b.bookings);
		return (Object.keys(b.bookings).length - Object.keys(a.bookings).length)
	}) ;
	// => (a.bookings.size() > b.bookings.size()) ? 1: (b.bookings.size() > a.bookings.size())? -1 :)
	console.log(sortedCustomers);

	const customers = props.customers.map((customer) => {

		return <Customer customer={customer} key={customer.id}/>
	})

	return (
		<div className="customer-list">
			<h1 className="heading">Customers</h1>
			<table className="customer-table">
				<tbody>
					<tr>
						<th>Name</th>
						<th>Age</th>
						<th>Contact</th>
						<th>Visits</th>
					</tr>
					{customers}
				</tbody>
			</table>
		</div>
	)
}

export default CustomerList;

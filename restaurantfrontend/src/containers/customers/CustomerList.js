import React from 'react';
import Customer from '../../components/customers/Customer'

const CustomerList = (props) => {
	if(!props.customers){
		return null
	}

	const sortedCustomers = props.customers.sort((a, b) => {
		return (Object.keys(b.bookings).length - Object.keys(a.bookings).length)
	}) ;
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

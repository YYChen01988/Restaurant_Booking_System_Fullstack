import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class BookingFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      customers: [],
      tables: [],
      bookings: [],
      startDate: moment()};
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date){
    this.setState({ startDate: date});
  }

  componentDidMount(){
    fetch('/bookings')
    .then((res) => res.json())
    .then((data) => {
      this.setState({bookings: data._embedded.bookings})
    })

    fetch('/customers')
    .then((res) => res.json())
    .then((data) => {
      this.setState({customers: data._embedded.customers})
    })

    fetch('/tables')
    .then((res) => res.json())
    .then((data) => {
      this.setState({tables: data._embedded.tables})
    })
  }


  handleSubmit(event){
    event.preventDefault();
    fetch("/bookings", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "name": event.target.customer.name.value,
        "age": event.target.customer.age.value,
        "contact": event.target.customer.contact.value,
        // "booking": event.target.booking.value
      })
    }).then(() => {
      window.location = "/bookings";
    })
  }

  render() {
    const customerOptions = this.state.customers.map((customer, index) => {
      return <option key={index} value={customer._links.self.href}>{customer.name}</option>
  })

    const tableOptions = this.state.tables.map((table, index) => {
      return <option key={index} value={table._links.self.href}>{table.tableNumber}</option>
  })

  function defaultDatePicker() {
    document.getElementById('datePicker').value = new Date().toDateInputValue();
  }

  return (
    <div className="form-container">
      <h1>Create Booking</h1>
      <DatePicker className="date-picker" selected={this.state.startDate} onChange={this.handleChange} required/>
      <form className="form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Name" name="name" required/>
        <input type="number" placeholder="Age" name="age" min="12" required/>
        <input type="text" placeholder="Contact" name="contact" required/>
        <input type="datetime-local" placeholder="DateTime" className="datetime" id="datePicker" required/>
        <select default="Select Customer" name="customer" id="customer">
          <option value="" disabled selected required>Select Customer</option>
            {customerOptions}
        </select>
        <select name="table" id="table">
          <option value="" disabled selected required>Select Table Number</option>
            {tableOptions}
        </select>
        <button type="submit" className="button">Save</button>
      </form>
    </div>
    )
  }

}

export default BookingFormContainer;

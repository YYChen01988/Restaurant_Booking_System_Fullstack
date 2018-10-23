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
      this.handleDate = this.handleDate.bind(this);
      this.handleInput = this.handleInput.bind(this);
    }

    handleDate(date){
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
      console.log(event.target.booking.startTime);
      event.preventDefault();
      fetch("/bookings", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          "startTime": event.target.startTime.value,
          "customer": event.target.customer.value,
          "party": event.target.party.value,
          "table": event.target.table.value
        })
      }).then(() => {
        window.location = "/bookings";
      })
    }

    handleInput(event){
      console.log(event.target.value);
        }

    render() {
      const customerOptions = this.state.customers.map((customer, index) => {
        return <option key={index} value={customer._links.self.href}>{customer.name}</option>
      })

      const customerData = this.state.customers.map((customer, index) => {
        const option = <option key={index} value={customer}></option>
      })

      const tableOptions = this.state.tables.map((table, index) => {
        return <option key={index} value={table._links.self.href}>{table.tableNumber}</option>
      })

      function defaultDatePicker() {
        document.getElementById('datePicker').value = new Date().toDateInputValue();
      }

      function nameSelector() {
        document.getElementById('customer-name')
      }

      return (
        <div className="form-container">
          <h1>Create Booking</h1>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleDate}
            showTimeSelect
            showTimeSelect
            minTime={moment().hours(12).minutes(0)}
            maxTime={moment().hours(22).minutes(30)}
            timeFormat="HH:mm"
            timeIntervals={30}
            dateFormat="LLL"
            timeCaption="time"
          />
          {/* <DatePicker className="date-picker" selected={this.state.startDate} onChange={this.handleChange} required/> */}
          <form className="form" onSubmit={this.handleSubmit}>

            {/* <input type="text" list="customers" onChange={this.handleInput}/>
            <datalist id="customers">
              {customerOptions}
            </datalist> */}

            {/* <input type="text" id="customer-name" placeholder="Name" name="name" required/>
            <input type="number" id="customer-age" placeholder="Age" name="age" min="15" required/>
            <input type="text" id="customer-contact" placeholder="Contact" name="contact" required/> */}

            {/* <input type="datetime-local" placeholder="DateTime" className="datetime" id="datePicker" required/> */}
            <select name="customer" id="customer">
              <option value="" disabled selected required>Select Customer</option>
              {customerOptions}
            </select>
            <input type="number" id="party" placeholder="Number of People" name="party" min="1" max="10" required/>
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

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
      fullTableList: [],
      bookings: [],
      startDate: moment()};
      this.handleDate = this.handleDate.bind(this);
      this.handleInput = this.handleInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDate(date){
      var requestedStartTime = date
      var requestedEndTime = new moment(date);
      requestedEndTime.add(2, 'hours')
      const overlappingBookings = this.state.bookings.filter(booking => !(requestedStartTime > moment(booking.endTime)  || requestedEndTime < moment(booking.startTime)));
      const unavalableTableIds = overlappingBookings.map(booking => booking.table.id)
      const avalableTables = this.state.fullTableList.filter(table =>   !unavalableTableIds.includes(table.id))
      this.setState({ startDate: date, tables: avalableTables});
      console.log("date", date.format('YYYY-MM-DDTHH:mm:ss'));
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
        this.setState({tables: data._embedded.tables, fullTableList: data._embedded.tables})
      })
    }

  handleSubmit(event){
    console.log('working', event.target.value);
    // const formattedDate = event.target.startTime.value.format('YYYY-MM-DDTHH:mm:ss')
    event.preventDefault();
    // fetch("/bookings", {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({
        // "startTime": formattedDate,
//         "customer": event.target.customer.value,
//         "party": event.target.party.value,
//         "table": event.target.table.value
// //       })
//     }).then(() => {
// console.log("we're here");
//       // window.location = "/bookings";
//     })
  }

  handleInput(event){
    console.log(event.target.value);
  }

  render() {
    const customerOptions = this.state.customers.map((customer, index) => {
      return <option key={index} value={customer._links.self.href}>{customer.name}</option>
    })

    // const customerData = this.state.customers.map((customer, index) => {
    //   const option = <option key={index} value={customer}></option>
    // })

    const tableOptions = this.state.tables.map((table, index) => {
      return <option key={index} value={table._links.self.href}>{table.tableNumber}</option>
    })

    // function defaultDatePicker() {
    //   document.getElementById('datePicker').value = new Date().toDateInputValue();
    // }
    //
    // function nameSelector() {
    //   document.getElementById('customer-name')
    // }

    return (
      <div className="form-container">
        <h1>Create Booking</h1>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleDate}
          showTimeSelect
          minTime={moment().hours(12).minutes(0)}
          maxTime={moment().hours(22).minutes(30)}
          timeFormat="HH:mm"
          timeIntervals={30}
          dateFormat="LLL"
          timeCaption="time"
        />
        <form className="form">
          <select name="customer" id="customer">
            <option value="" disabled selected required>Select Customer</option>
            {customerOptions}
          </select>
          <input type="number" id="party" placeholder="Number of People" name="party" min="1" max="10" required/>
          <select name="table" id="table">
            <option value="" disabled selected required>Select Table Number</option>
            {tableOptions}
          </select>
          <input type="button" onClick={this.handleSubmit} className="button" value="Submit"/>
        </form>
      </div>
    )
  }

}

  export default BookingFormContainer;

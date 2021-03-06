import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import Request from '../../helpers/request'

class BookingFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      customers: [],
      tables: [],
      fullTableList: [],
      bookings: [],
      startDate: moment()
    };
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePartySize = this.handlePartySize.bind(this);
  }

  handleDate(date){
    var requestedStartTime = date
    var requestedEndTime = new moment(date);
    requestedEndTime.add(2, 'hours')
    const overlappingBookings = this.state.bookings.filter(booking => !(requestedStartTime > moment(booking.endTime)  || requestedEndTime < moment(booking.startTime)));
    const unavalableTableIds = overlappingBookings.map(booking => booking.table.id)
    const avalableTables = this.state.fullTableList.filter(table => !unavalableTableIds.includes(table.id))
    this.setState({startDate: date, tables: avalableTables});
  }

  handlePartySize(party){
    var size = party.target.value
    const partySizeCheck = this.state.fullTableList.filter((table) => {
      return table.capacity >= size;
    })
    this.setState({tables: partySizeCheck})
  }

  componentDidMount(){
    const request = new Request();
    request.get('/bookings')
    .then((data) => {
      this.setState({bookings: data._embedded.bookings})
    })

    request.get('/customers')
    .then((data) => {
      this.setState({customers: data._embedded.customers})
    })

    request.get('/tables')
    .then((data) => {
      this.setState({tables: data._embedded.tables, fullTableList: data._embedded.tables})
    })
  }

  handleSubmit(event){
    event.preventDefault();
    var formattedDate = moment(event.target.datepicker.value).format('YYYY-MM-DDTHH:mm:ss');
    var formattedEndDate = moment(event.target.datepicker.value).add(2, 'hours').format('YYYY-MM-DDTHH:mm:ss');
    fetch("/bookings", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "startTime": formattedDate,
        "endTime": formattedEndDate,
        "customer": event.target.customer.value,
        "party": event.target.party.value,
        "table": event.target.table.value
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

    return (
      <React.Fragment>
        <h1>Create New Booking</h1>
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <DatePicker
              className="datepicker"
              id="datepicker"
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
            <select name="customer" id="customer" required>
              <option value="" disabled selected required>Select Customer</option>
              {customerOptions}
            </select>
            <input type="number" id="party" placeholder="Number of People" name="party" min="1" max="10" onChange={this.handlePartySize} required/>
            <select name="table" id="table" required>
              <option value="" disabled selected required>Select Table Number</option>
              {tableOptions}
            </select>
            <input type="submit" value="Save" className="button"/>
          </form>
        </div>
      </React.Fragment>
    )
  }

}

export default BookingFormContainer;

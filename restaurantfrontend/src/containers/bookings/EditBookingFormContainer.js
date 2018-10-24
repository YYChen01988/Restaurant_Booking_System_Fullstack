import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class EditBookingFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {bookings: null}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    let value = event.target.value
    let name = event.target.name

    let bookingsCopy = Object.assign({}, this.state.bookings);
    bookingsCopy[name] = value;
    this.setState({ bookings: bookingsCopy })
  }


  handleSubmit(event){
    event.preventDefault();
    console.log("submit is: ",event.target.datepicker.value);
    var formattedDate = moment(event.target.datepicker.value).format('YYYY-MM-DDTHH:mm:ss');
    var formattedEndDate = moment(event.target.datepicker.value).add(2, 'hours').format('YYYY-MM-DDTHH:mm:ss');
    fetch(this.props.url, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "startTime": formattedDate,
        "endTime": formattedEndDate
      })
    })
    .then(() => {
      window.location="/bookings";
    })
  }

  componentDidMount(){
    fetch(this.props.url)
    .then((res) => res.json())
    .then((data) => {
      this.setState({bookings: data})
      console.log("data is:", data);
    })
  }

  render(){
    if (!this.state.bookings) return null;

    return(
      <div className="form-container">
        <p>Original booking: {moment(this.state.bookings.startTime).format('DD-MM-YY HH:mm')}</p>
        <form horizontal onSubmit={this.handleSubmit}>
          <p>Booking Customer: {this.state.bookings.customer.name} </p>
          <p>Table Number: {this.state.bookings.table.tableNumber}</p>
          <p>Table Capacity: {this.state.bookings.table.capacity}</p>
          <p>Change Booking Date: </p>
          <DatePicker
            className="date-picker"
            id="datepicker"
            value={moment(this.state.bookings.startTime).format('DD-MM-YY HH:mm')}
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
          <button className="button" type="submit">Save Changes</button>
        </form>
      </div>
    )
  }

};

export default EditBookingFormContainer;

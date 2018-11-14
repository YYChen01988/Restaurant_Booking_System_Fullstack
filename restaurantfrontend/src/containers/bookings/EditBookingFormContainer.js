import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class EditBookingFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      bookings: null,
      startDate: moment()
    };
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDate(date){
    var requestedEndTime = new moment(date);
    requestedEndTime.add(2, 'hours')
    this.setState({startDate: date})
  }

  handleDelete(event){
    const url = "/bookings/" + this.state.bookings.id
    fetch(url,{
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(() => {
      window.location = "/bookings";
    })
    .catch(err => console.error(err))
  }


  handleSubmit(event){
    event.preventDefault();
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
    })
  }

  render(){
    if (!this.state.bookings) return null;
    return(
      <React.Fragment>
        <h1>Edit Booking</h1>
        <div className="form-container">
          <p className="p-booking">Original booking: {moment(this.state.bookings.startTime).format('DD-MM-YY HH:mm')}</p>
          <form onSubmit={this.handleSubmit}>
            <p>Booking Customer: {this.state.bookings.customer.name} </p>
            <p>Table Number: {this.state.bookings.table.tableNumber}</p>
            <p>Table Capacity: {this.state.bookings.table.capacity}</p>
            <br/>
            <h3>Change Booking Date </h3>
            <DatePicker
              className="datepicker"
              id="datepicker"
              selected={this.state.startDate}
              onChange={this.handleDate}
              showTimeSelect
              minTime={moment().hours(12).minutes(0)}
              maxTime={moment().hours(22).minutes(0)}
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="LLL"
              timeCaption="time"
            />
            <input type="submit" value="Save"/>
            <input type="submit" value="Delete" onClick={this.handleDelete}/>
          </form>
        </div>
      </React.Fragment>
    )
  }

};

export default EditBookingFormContainer;

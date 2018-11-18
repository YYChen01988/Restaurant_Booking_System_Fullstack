import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import BookingList from './BookingList.js';
import Request from '../../helpers/request';

class BookingContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      bookings: [],
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(empty){
    this.setState({startDate: null})
  }

  handleChange(date){
    this.setState({startDate: date});
  }

  componentDidMount(){
    const request = new Request();
    request.get('/bookings')
    .then((data) => {
      this.setState({bookings: data._embedded.bookings})
    })
  }

  render() {
    return (
      <React.Fragment>
        <button className="button" id="booking-button" onClick={this.handleClick}>View all bookings</button>
        <h1>Choose a Date</h1>
        <div className="datepicker">
          <DatePicker className="datepicker" dateFormat="DD-MM-YY" selected={this.state.startDate} onChange={this.handleChange}/>
        </div>
        <BookingList bookings={this.state.bookings} filterDate={this.state.startDate}/>
      </React.Fragment>
    )
  }
}


export default BookingContainer;

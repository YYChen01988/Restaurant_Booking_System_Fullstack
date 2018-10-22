import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import BookingList from './BookingList.js';

class BookingContainer extends Component {

  constructor(props){
    super(props);
    this.state = {bookings: [],
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
  }

  render() {
		return (
      <div>
        <div className="date-picker">
          <DatePicker className="date-picker" selected={this.state.startDate} onChange={this.handleChange}/>
        </div>
			     <BookingList bookings={this.state.bookings} filterDate={this.state.startDate}/>
      </div>
		)
	}
}


export default BookingContainer;

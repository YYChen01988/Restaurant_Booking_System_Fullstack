import React, {Component} from 'react';
import BookingList from './BookingList.js';

class BookingContainer extends Component {

  constructor(props){
    super(props);
    this.state = {bookings: []}
  }

  componentDidMount(){
    fetch('/bookings')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      this.setState({bookings: data._embedded.bookings})
    })
  }

  render() {
		return (
			<BookingList bookings={this.state.bookings} />
		)
	}
}


export default BookingContainer;

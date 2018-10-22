import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class BookingFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = { bookings: [],
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

    handleSubmit(event){
      event.preventDefault();
      fetch("/customers", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          "name": event.target.name.value,
          "age": event.target.age.value,
          "contact": event.target.contact.value,
          // "booking": event.target.booking.value
        })
      }).then(() => {
        window.location = "/customers";
      })
    }

    render() {

      // const options = this.state.bookings.map((booking, index) => {
      //   return <option key={index} value={booking._links.self.href}>{booking.name}</option>
      // })

      return (
        <div className="form-container">
          <h1>Create Booking</h1>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
          {/* <form className="form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" name="name" required/>
          <input type="number" placeholder="Age" name="age" min="12"/>
          <input type="text" placeholder="Contact" name="contact" required/>
          <input type="datetime-local" placeholder="DateTime" name="datetime" required/>
          {/* <select name="booking">
          {options}
        </select>
        <input type="date" name="" /> */}
        {/* <button type="submit">Save</button> */}
        {/* </form> */}
      </div>
    )
  }

}

export default BookingFormContainer;

import React, {Component} from 'react';

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
    console.log("submit is: ",event.target.date);
    fetch(this.props.url, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "date": event.target.date.value,
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
      console.log("data is:", data.customer.name);
    })
  }

  render(){
    if (!this.state.bookings) return null;

    return(
      <div className="form-container">
        <form horizontal onSubmit={this.handleSubmit}>
          <p>Booking Customer: {this.state.bookings.customer.name} </p>
          <p>Change Booking Date: </p>
          <input type="datetime-local" value={this.state.bookings.date} onChange={this.handleChange} name="date"/>
          <button className="button" type="submit">Save Edited Details</button>
        </form>
      </div>
    )
  }

};

export default EditBookingFormContainer;

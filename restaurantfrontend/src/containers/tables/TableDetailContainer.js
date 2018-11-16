import React, {Component} from 'react';
import TableDetail from './TableDetail';

class TableDetailContainer extends Component {
  constructor(props) {
    super(props)
    this.url = props.url;
    this.state = {
      tables: null,
      bookings: null
    }
  }

  componentDidMount(){
    fetch(this.url)
    .then((res) => res.json())
    .then((data) => {
      this.setState({tables: data, bookings: data._embedded.bookings})
      console.log(this.state.bookings);
    })
  }

  render(){
    return (
      <TableDetail bookings={this.state.bookings}/>
    )
  }
}

export default TableDetailContainer;

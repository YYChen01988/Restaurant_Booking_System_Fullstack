import React, {Component} from 'react';
import TableDetail2 from './TableDetail2';
import Request from '../../helpers/request';

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
    const request = new Request();
    request.get(this.url)
    .then((data) => {
      this.setState({tables: data, bookings: data._embedded.bookings})
      console.log(this.state.bookings);
      console.log(this.state.tables);
    })
  }

  // componentDidMount(){
  //   fetch(this.props.url)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     if(!data._embedded){
  //       this.setState({tables: [data]})
  //     } else if (!data._embedded.tables){
  //       this.setState({tables: [data]})
  //     }
  //     else {
  //       this.setState({tables: data._embedded.tables})
  //     }
  //   })
  // }

  render(){
    return (
      <TableDetail2 tables={this.state.tables} bookings={this.state.bookings}/>
    )
  }
}

export default TableDetailContainer;

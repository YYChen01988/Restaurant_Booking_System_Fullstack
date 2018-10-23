import React, {Component} from 'react';
import TableList from './TableList.js';

class TableContainer extends Component {

  constructor(props){
    super(props);
    this.state = {tables: []}
  }

  componentDidMount(){
    console.log(this.props.url);
    fetch(this.props.url)
    .then((res) => res.json())
    .then((data) => {
      console.log('data', data);
      if(data._embedded){
        this.setState({tables: data._embedded.bookings})
      } else {
        this.setState({tables: [data]})
      }
    })
  }

  render(){
    console.log('render', this.state);
    return (
      <TableList tables={this.state.tables}/>
    )
  }
}


export default TableContainer;

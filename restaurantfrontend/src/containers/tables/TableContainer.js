import React, {Component} from 'react';
import TableList from './TableList.js';

class TableContainer extends Component {

  constructor(props){
    super(props);
    this.state = {tables: []}
    this.url = props.url;
  }

  componentDidMount(){
    fetch(this.url)
    .then((res) => res.json())
    .then((data) => {
      if(data._embedded){
        this.setState({tables: data._embedded.tables})
      } else {
        this.setState({tables: [data]})
      }
    })
  }

  render(){
    return (
      <TableList tables={this.state.tables}/>
    )
  }
}


export default TableContainer;

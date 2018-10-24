import React, {Component} from 'react';
import TableList from './TableList.js';

class TableContainer extends Component {

  constructor(props){
    super(props);
    this.state = {tables: []}
  }

  componentDidMount(){
    fetch(this.props.url)
    .then((res) => res.json())
    .then((data) => {
      if(!data._embedded){
        this.setState({tables: [data]})
      } else if (!data._embedded.tables){
        this.setState({tables: [data]})
      }
      else {
        this.setState({tables: data._embedded.tables})
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

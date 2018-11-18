import React, {Component} from 'react';
import TableList from './TableList.js';
import Request from '../../helpers/request'

class TableContainer extends Component {

  constructor(props){
    super(props);
    this.state = {tables: []}
  }

  componentDidMount(){
    const request = new Request();
    request.get(this.props.url)
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

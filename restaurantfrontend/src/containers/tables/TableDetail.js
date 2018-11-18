import React, {Component} from 'react';
import TableIndividual from '../../components/tables/TableIndividual';
import Request from '../../helpers/request';

class TableDetail extends Component {
  constructor(props) {
    super(props)
    this.url = props.url;
    this.state = {
      table: null
    }
  }

  componentDidMount(){
    const request = new Request();
    request.get(this.url)
    .then((table) => {
      this.setState({table: table})
    })
  }

  render(){
    return (
      <TableIndividual table={this.state.table}/>
    )
  }
}

export default TableDetail;

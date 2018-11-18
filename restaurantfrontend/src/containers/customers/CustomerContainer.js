import React, {Component} from 'react';
import Request from '../../helpers/request'
import CustomerList from './CustomerList.js';

class CustomerContainer extends Component {

  constructor(props){
    super(props);
    this.state = {customers: []}
    this.url = props.url;
  }

  componentDidMount(){
    const request = new Request();
    request.get(this.url)
    .then((data) => {
      if(!data._embedded){
        this.setState({customers: [data]})
      } else if (!data._embedded.customers) {
        this.setState({customers: [data]})
      }
      else {
        this.setState({customers: data._embedded.customers})
      }
    })
  }

  render(){
    return (
      <CustomerList customers={this.state.customers}/>
    )
  }
}


export default CustomerContainer;

import React, {Component} from 'react';
import CustomerList from './CustomerList.js';

class CustomerContainer extends Component {

  constructor(props){
    super(props);
    this.state = {customers: []}
    this.url = props.url;
  }

  componentDidMount(){
    fetch(this.url)
    .then((res) => res.json())
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

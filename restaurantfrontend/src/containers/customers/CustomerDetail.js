import React, {Component} from 'react';
import CustomerIndividual from '../../components/customers/CustomerIndividual';

class CustomerDetail extends Component {
  constructor(props) {
    super(props)
    this.url = props.url;
    this.state = {
      customer: null
    }
  }

  componentDidMount(){
    fetch(this.url)
    .then((res) => res.json())
    .then((customer) => {
      this.setState({customer: customer})
    })
  }

  render(){
    return (
      <CustomerIndividual customer={this.state.customer}/>
    );
  }
}

export default CustomerDetail;

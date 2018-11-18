import React, {Component} from 'react';
import Request from '../../helpers/request'
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
    const request = new Request();
    request.get(this.url)
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

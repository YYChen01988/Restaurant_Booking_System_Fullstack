import React, {Component} from 'react';
import Request from '../../helpers/request'

class CustomerFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = { customers: []};
  }

  componentDidMount(){
    const request = new Request();
    request.get('/customers')
    .then((data) => {
      this.setState({customers: data._embedded.customers})
    })
  }

  handleSubmit(event){
    event.preventDefault();
    fetch("/customers", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "name": event.target.name.value,
        "age": event.target.age.value,
        "contact": event.target.contact.value,
      })
    }).then(() => {
      window.location = "/customers";
    })
  }

  render() {

    return (
      <React.Fragment>
        <h1>Create New Customer</h1>
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Name" name="name" required/>
            <input type="number" placeholder="Age" name="age" min="15"/>
            <input type="text" placeholder="Contact" name="contact" required/>
            <input type="submit" value="Save" className="button"/>
          </form>
        </div>
      </React.Fragment>
    )
  }

}

export default CustomerFormContainer;

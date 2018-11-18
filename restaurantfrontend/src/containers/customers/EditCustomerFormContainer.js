import React, {Component} from 'react';
import Request from '../../helpers/request'

class EditCustomerFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {customers: null}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    let value = event.target.value
    let name = event.target.name
    let customersCopy = Object.assign({}, this.state.customers);
    customersCopy[name] = value;
    this.setState({customers: customersCopy})
  }

  handleSubmit(event){
    event.preventDefault();
    fetch(this.props.url, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "name": event.target.name.value,
        "age": event.target.age.value,
        "contact": event.target.contact.value
      })
    })
    .then(() => {
      window.location="/customers";
    })
  }

  componentDidMount(){
    const request = new Request();
    request.get(this.props.url)
    .then((data) => {
      this.setState({customers: data})
    })
  }

  render(){
    if (!this.state.customers) return null;
    return (
      <React.Fragment>
        <h1>Edit Customer</h1>
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>

            <div className="row">
              <div className="col-30">
                <label htmlFor="name">Name: </label>
              </div>
              <div className="col-70">
                <input type="text" name="name" defaultValue={this.state.customers.name} onChange={this.handleChange} required/>
              </div>
            </div>

            <div className="row">
              <div className="col-30">
                <label htmlFor="age">Age: </label>
              </div>
              <div className="col-70">
                <input type="number" name="age" defaultValue={this.state.customers.age} onChange={this.handleChange} min="15"/>
              </div>
            </div>

            <div className="row">
              <div className="col-30">
                <label htmlFor="contact">Contact: </label>
              </div>
              <div className="col-70">
                <input type="text" name="contact" defaultValue={this.state.customers.contact} onChange={this.handleChange} required/>
              </div>
            </div>

            <input type="submit" value="Submit" className="button"/>

          </form>
        </div>
      </React.Fragment>
    );
  }

}

export default EditCustomerFormContainer;

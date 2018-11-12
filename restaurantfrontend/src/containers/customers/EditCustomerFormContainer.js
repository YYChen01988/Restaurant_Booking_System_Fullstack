import React, {Component} from 'react';

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
    fetch(this.props.url)
    .then((res) => res.json())
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
          <form className="form" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Name" name="name"
              value={this.state.customers.name} onChange={this.handleChange} required/>
            <input type="number" placeholder="Age" name="age"
              value={this.state.customers.age} onChange={this.handleChange} min="15"/>
            <input type="text" placeholder="Contact" name="contact"
              value={this.state.customers.contact} onChange={this.handleChange} required/>
            <button type="submit" className="button">Save</button>
          </form>
        </div>
      </React.Fragment>
    );
  }

}

export default EditCustomerFormContainer;

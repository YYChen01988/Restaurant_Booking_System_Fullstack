import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './NavBar.js';
import HomeContainer from './containers/HomeContainer';
import CustomerContainer from './containers/customers/CustomerContainer';
import CustomerFormContainer from './containers/customers/CustomerFormContainer';
import EditCustomerFormContainer from './containers/customers/EditCustomerFormContainer';
import CustomerDetail from './containers/customers/CustomerDetail';
import BookingContainer from './containers/bookings/BookingContainer';
import BookingFormContainer from './containers/bookings/BookingFormContainer';
import EditBookingFormContainer from './containers/bookings/EditBookingFormContainer';
import TableContainer from './containers/tables/TableContainer';
import TableDetail from './containers/tables/TableDetail';
// import TableDetailContainer from './containers/tables/TableDetailContainer';

class App extends Component {

  render() {
    return (
      <Router>
        <React.Fragment >
          <NavBar/>
          <Switch>

            {/* Home */}
            <Route exact path = "/" component = {HomeContainer} />

            {/* Customers */}
            <Route exact path="/customers" render={() => {
              const url = "/customers";
              return <CustomerContainer url={url}/>
            }}/>
            <Route exact path="/customers/new" component={CustomerFormContainer}/>
            <Route exact path="/customers/:id" render={(props) => {
              const url = "/customers/" + props.match.params.id + "?projection=embedBooking"
              return <CustomerDetail url={url}/>
            }}/>
            <Route exact path="/customers/:id/edit" render={(props) => {
              const url = "/customers/" + props.match.params.id + "?projection=embedBooking"
              return <EditCustomerFormContainer url={url}/>
            }}/>

            {/* Bookings */}
            <Route exact path="/bookings/new" component={BookingFormContainer}/>
            <Route exact path="/bookings" component={BookingContainer}/>
            <Route exact path="/bookings/:id" render={(props) => {
              const url = "/bookings/" + props.match.params.id + "?projection=embedCustomer"
              return <BookingContainer url={url}/>
            }}/>
            <Route exact path="/bookings/:id/edit" render={(props) => {
              const url = "/bookings/" + props.match.params.id + "?projection=embedCustomer"
              return <EditBookingFormContainer url={url}/>
            }}/>

            {/* Tables */}
            <Route exact path="/tables" render={() => {
              const url = "/tables";
              return <TableContainer url={url}/>
            }}/>
            <Route exact path="/tables/:id" render={(props) => {
              const url = "/tables/" + props.match.params.id + "?projection=embedBooking"
              return <TableDetail url={url}/>
            }}/>

          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './NavBar.js';
import CustomerContainer from './containers/customers/CustomerContainer';
import BookingContainer from './containers/bookings/BookingContainer';
import TableContainer from './containers/tables/TableContainer';
import BookingFormContainer from './containers/bookings/BookingFormContainer';
import EditBookingFormContainer from './containers/bookings/EditBookingFormContainer';
import CustomerFormContainer from './containers/customers/CustomerFormContainer';

class App extends Component {

  render() {
    return (
      <Router>
        <React.Fragment >
          <NavBar/>
          <Switch>

            {/* CUSTOMERS */}
            <Route exact path="/customers" render={() => {
              const url = "/customers";
              return <CustomerContainer url={url}/>
            }}/>
            <Route exact path="/customers/new" component={CustomerFormContainer}/>
            <Route exact path="/customers/:id" render={(props) => {
              const url = "/customers/" + props.match.params.id + "?projection=embedBooking"
              return <CustomerContainer url={url}/>
            }}/>

            {/* BOOKINGS */}
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

            {/* TABLES */}
            <Route exact path="/tables" render={() => {
              const url = "/tables";
              return <TableContainer url={url}/>
            }}/>
            <Route exact path="/tables/:id" render={(props) => {
              const url = "/tables/" + props.match.params.id + "?projection=embedBooking"
              return <TableContainer url={url}/>
            }}/>

          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;

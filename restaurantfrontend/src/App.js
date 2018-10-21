import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './NavBar.js';
import CustomerContainer from './containers/customers/CustomerContainer';
import BookingContainer from './containers/bookings/BookingContainer';
import TableContainer from './containers/tables/TableContainer';
import BookingFormContainer from './containers/bookings/BookingFormContainer';

class App extends Component {

  render() {
    return (
      <Router>
        <React.Fragment >
          <NavBar/>
          <Switch>
            <Route exact path="/customers" render={() => {
              const url = "/customers";
              return <CustomerContainer url={url}/>
            }}/>
            <Route exact path="/customers/:id" render={(props) => {
              const url = "/customers/" + props.match.params.id + "?projection=embedBooking"
              return <CustomerContainer url={url}/>
            }}/>
            <Route exact path="/bookings" component={BookingContainer}/>
            <Route exact path="/bookings/new" component={BookingFormContainer}/>
            <Route exact path="/tables" component={TableContainer}/>
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './NavBar.js';
import CustomerContainer from './containers/customers/CustomerContainer';

class App extends Component {

  render() {
    return (
      <Router>
        <React.Fragment >
          <NavBar />
          <Switch>
            <Route exact path="/customers" render={() => {
              const url = "/customers";
              return <CustomerContainer url={url}/>
            }}/>
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;

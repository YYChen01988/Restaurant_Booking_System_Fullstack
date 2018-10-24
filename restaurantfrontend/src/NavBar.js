import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>
      <ul className="topnav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="dropdown">
          <a href="javascript:void(0)" className="dropbtn">Bookings<i className="fa fa-caret-down"></i></a>
          <div className="dropdown-content">
            <Link to="/bookings">Bookings</Link>
            <Link to="/bookings/new">Create Booking</Link>
          </div>
        </li>
        <li className="dropdown">
          <a href="javascript:void(0)" className="dropbtn">Customers<i className="fa fa-caret-down"></i></a>
          <div className="dropdown-content">
            <Link to="/customers">Customers</Link>
            <Link to="/customers/new">Create Customer</Link>
          </div>
        </li>
        <li>
          <Link to="/tables">Tables</Link>
        </li>
      </ul>
    </header>
  )
}

export default NavBar;

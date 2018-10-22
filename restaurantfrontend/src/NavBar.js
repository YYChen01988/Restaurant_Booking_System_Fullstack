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
          <a className="dropbtn">Bookings<i class="fa fa-caret-down"></i></a>
          <div className="dropdown-content">
            <Link to="/bookings">Bookings</Link>
            <Link to="/bookings/new">Create Booking</Link>
          </div>
        </li>
        <li>
          <Link to="/customers">Customers</Link>
        </li>
        <li>
          <Link to="/tables">Tables</Link>
        </li>
      </ul>
    </header>
  )
}

export default NavBar;

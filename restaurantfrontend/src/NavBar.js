import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>
      <ul className="topnav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bookings">Bookings</Link>
        </li>
        <li>
          <Link to="/bookings/new">Create Booking</Link>
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

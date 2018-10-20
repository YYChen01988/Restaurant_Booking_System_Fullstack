import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>
      <ul className="topnav">
        <li className="active">
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
      </ul>
    </header>
  )
}

export default NavBar;

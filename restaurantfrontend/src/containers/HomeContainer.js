import React from 'react';

const HomeContainer = (props) => {
  return (
    <React.Fragment>
      <main>
        <div className="grid">

          <div className="grid-row">
            <div className="cell">

              <button className="home-button"><span><a href="/bookings">Bookings</a></span></button>
            </div>
            <div className="cell">
              <button className="home-button2"><span><a href="/bookings/new">Create Booking</a></span></button>
            </div>
          </div>

          <div className="grid-row">
            <div className="cell">
              <button className="home-button"><span><a href="/customers">Customer</a></span></button>
            </div>
            <div className="cell">
              <button className="home-button2"><span><a href="/customers/new">Create Customer</a></span></button>
            </div>
          </div>

          <div className="grid-row">
            <div className="cell">
              <button class="home-button"><span><a href="/tables">Tables</a></span></button>
            </div>
          </div>

        </div>
        <footer>
          <center>
            <p>© 2018 T-Bone's Tavern</p>
          </center>
        </footer>
      </main>

    </React.Fragment>
  );
}

// style="vertical-align:middle"

export default HomeContainer;

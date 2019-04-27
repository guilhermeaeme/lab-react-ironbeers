import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Home } from 'react-feather';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container d-flex justify-content-center">
          <NavLink exact to="/" className="nav-link" activeClassName="invisible">
            <Home color="white" />
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default NavBar;

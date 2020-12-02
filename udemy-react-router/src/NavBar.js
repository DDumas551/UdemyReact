import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div className="Navbar">
        <NavLink
          activeClassName="navbar-active"
          className="navbar-link"
          to="/"
        >Home</NavLink>
        <NavLink
          activeClassName="navbar-active"
          className="navbar-link"
          to="/chips"
        >
          Chips
        </NavLink>
        <NavLink
          activeClassName="navbar-active"
          className="navbar-link"
          to="/soda"
        >
          Soda
        </NavLink>
        <NavLink
          activeClassName="navbar-active"
          className="navbar-link"
          to="/chocolate"
        >
          Chocolate
        </NavLink>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Chips extends Component {
  render() {
    return (
      <div>
        <div>Chips</div>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

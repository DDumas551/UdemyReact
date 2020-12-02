import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Soda extends Component {
  render() {
    return (
      <div>
        <div>Soda</div>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

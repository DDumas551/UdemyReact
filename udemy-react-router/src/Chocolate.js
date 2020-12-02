import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Chocolate extends Component {
  render() {
    return (
      <div>
        <div>Chocolate</div>
        <Link to="/">Home</Link>;
      </div>
    );
  }
}

import React, { Component } from "react";
import Cat from "./Cat";
import { Link, Route } from "react-router-dom";

export default class Dog extends Component {
  render() {
    return (
      <div>
        <h1>This Crazy Floof</h1>
        <img
          alt="doggo"
          src="https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/127819049_288657082535467_7327974677010179234_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=RZR3H_3SQ-8AX_cTZbs&tp=1&oh=98ed9c92815ed05eb44ece013e861130&oe=5FEEFC03"
          style={{ width: "500px" }}
        />
      </div>
    );
  }
}

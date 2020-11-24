import React, { Component } from "react";

export default class LottoBall extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "tomato",
          borderRadius: "50%",
          color: "white",
          display: "inline-block",
          width: "3em",
          height: "2.25em",
          marginRight: "0.5em",
          paddingTop: ".75em",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.5em",
        }}
      >
        {this.props.num}
      </div>
    );
  }
}

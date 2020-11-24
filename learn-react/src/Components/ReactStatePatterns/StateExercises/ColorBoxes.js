import React, { Component } from "react";
import Box from "./Box";

export default class ColorBoxes extends Component {
  static defaultProps = {
    numBoxes: 18,
  };
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box />
    ));
    return <div className="ColorBoxes">{boxes}</div>;
  }
}

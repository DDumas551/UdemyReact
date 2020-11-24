import React, { Component } from "react";

function choice(arr) {
  let randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
}

export default class Box extends Component {
  static defaultProps = {
    allColors: ["orange", "blue", "red", "green", "black", "grey", "purple"],
  };
  constructor(props) {
    super(props);
    this.state = { color: choice(this.props.allColors) };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let newColor;
    do {
      newColor = choice(this.props.allColors);
    } while (newColor === this.state.color);
    this.setState({ color: newColor });
  }
  render() {
    return (
      <div
        className="Box"
        style={{
          backgroundColor: `${this.state.color}`,
          width: "12em",
          height: "12em ",
        }}
        onClick={() => this.handleClick()}
      ></div>
    );
  }
}

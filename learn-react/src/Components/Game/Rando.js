import React, { Component } from "react";

class Rando extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0, clicked: false };
    this.makeTimer();
    this.makeTimer = this.makeTimer.bind(this);
  }
  changeColor = (e) => {
    this.setState({ clicked: !this.state.clicked });
  };
  makeTimer() {
    setInterval(() => {
      let rand = Math.floor(Math.random() * this.props.maxNum);
      this.setState({ num: rand });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1 style={{ color: this.state.clicked ? "green" : "red" }}>
          {this.state.num}
        </h1>
        <button onClick={this.changeColor}>Change the color</button>
      </div>
    );
  }
}

export default Rando;

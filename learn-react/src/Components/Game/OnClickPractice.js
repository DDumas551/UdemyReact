import React, { Component } from "react";

class OnClickPractice extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };
  }
  updateNumber = (e) => {
    let rand = Math.floor(Math.random() * 10) + 1;
    this.setState({ num: rand });
  };
  render() {
    const { num } = this.state;
    return (
      <div>
        <h1>
          Your Number Is:{" "}
          <span style={{ color: num === 7 ? "green" : "red" }}></span>
          {num}
        </h1>
        {num === 7 && <h1>You win!</h1>}
        <button onClick={this.updateNumber}>Click</button>
      </div>
    );
  }
}

export default OnClickPractice;

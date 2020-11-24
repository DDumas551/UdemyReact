import React, { Component } from "react";

export default class ScoreKeeper extends Component {
  constructor(props) {
    super(props);
    this.state = { score: 0 };
  }
  plusOne = (e) => {
    this.setState();
  };
  //callback form
  plusTwo() {
    this.setState((st) => ({
      score: st.score + 2
    }));
  }
  plusThree = (e) => {
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
  };

  incrementScore(curState) {
    return { score: curState.score + 1 };
  }
  render() {
    const { score } = this.state;
    return (
      <div>
        <h1>{score}</h1>
        <button onClick={() => this.plusOne()}>Single</button>
        <button onClick={() => this.plusTwo()}>Double</button>
        <button onClick={() => this.plusThree()}>Tripple</button>
      </div>
    );
  }
}

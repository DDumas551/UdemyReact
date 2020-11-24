import React, { Component } from "react";
import RollDice from "../../Game/Dice/RollDice";
import LottoBall from "./LottoBall";

export default class LotteryHome extends Component {
  static defaultProps = {
    title: "Lotto",
    maxBalls: 6,
    maxNum: 40,
  };
  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({ length: this.props.maxBalls }),
    };
    this.roll = this.roll.bind(this);
    this.generate = this.generate.bind(this);
  }
  generate() {
    this.setState((st) => ({
      nums: st.nums.map(
        (num) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  }
  roll() {
    this.generate();
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map((num) => (
            <LottoBall num={num} />
          ))}
        </div>
        <button onClick={this.roll}>Generate Numbers!</button>
      </div>
    );
  }
}

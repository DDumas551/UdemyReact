import React, { Component } from "react";
import Dice from "./Dice";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = {
      dieOne: "one",
      dieTwo: "one",
      rolling: false,
      buttonDisabled: false,
    };
    this.roll = this.roll.bind(this);
  }

  roll = (e) => {
    const newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    this.setState({
      dieOne: newDie1,
      dieTwo: newDie2,
      rolling: true,
      buttonDisabled: true,
    });
    setTimeout(() => {
      this.setState({ rolling: false, buttonDisabled: false });
    }, 1000);
  };
  render() {
    const { dieOne, dieTwo, rolling, buttonDisabled } = this.state;
    return (
      <div>
        <Dice face={dieOne} />
        <Dice face={dieTwo} />
        <div className="rollBtn">
          <button
            className="rollButton"
            disabled={buttonDisabled}
            style={{
              backgroundColor: `${buttonDisabled ? "lightGray" : "white"}`,
              transitionDuration: "0.3s",
            }}
            onClick={() => this.roll()}
          >
            {rolling ? "Rolling..." : "Roll Dice!"}
          </button>
        </div>
      </div>
    );
  }
}

export default RollDice;

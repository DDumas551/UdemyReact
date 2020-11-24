import React, { Component } from "react";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      gameOver: false,
    };
  }
  plusOne() {
    this.setState((st) => ({ score: (st.score += 1) }));
  }
  render() {
    const { score } = this.state;
    return (
      <div>
        <h1>Your score is: {score}</h1>
        <div
          style={{
            cursor: "pointer",
            border: "1px solid black",
            width: "100px",
            textAlign: "center",
            padding: "7px",
            borderRadius: "6px",
            userSelect: "none",
          }}
          onClick={() => this.plusOne()}
        >
          PLUS ONE LOL
        </div>
      </div>
    );
  }
}

export default Game;

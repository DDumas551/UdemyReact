import React, { Component } from "react";

export default class CoinFlip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinFace: "H",
      hCount: 0,
      tCount: 0,
    };
    this.flip = this.flip.bind(this);
    this.plusHeads = this.plusHeads.bind(this);
    this.plusTails = this.plusTails.bind(this);
  }
  flip() {
    let num = Math.floor(Math.random() * 2);
    num === 1 ? this.plusHeads() : this.plusTails();
  }
  plusHeads() {
    this.setState((st) => {
      return {
        hCount: st.hCount + 1,
        coinFace: (st.coinFace = "H"),
      };
    });
  }
  plusTails() {
    this.setState((st) => ({
      tCount: st.tCount + 1,
      coinFace: (st.coinFace = "T"),
    }));
  }
  render() {
    const { coinFace, hCount, tCount } = this.state;
    return (
      <div>
        <h1>Flip the coin!</h1>
        <h3
          style={{
            border: "1px solid black",
            width: "50px",
            height: "50px",
            margin: "auto",
            borderRadius: "50%",
            fontSize: "34px",
          }}
        >
          {coinFace}
        </h3>
        <button onClick={() => this.flip()}>Flip the coin!</button>
        <div>
          <div>Heads count: {hCount}</div>
          <div>Tails count: {tCount}</div>
          <div>Total Flips: {hCount + tCount}</div>
          <div>Ratio: {(hCount / tCount).toFixed(3)}</div>
        </div>
      </div>
    );
  }
}

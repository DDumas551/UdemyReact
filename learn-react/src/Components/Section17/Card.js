import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    let angle = Math.random() * 90 - 40;
    let xPos = Math.random() * 40 - 20;
    let yPos = Math.random() * 40 - 20;
    this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
  }
  render() {
    return (
      <div>
        <img
          key={this.props.id}
          id={this.props.id}
          className="Card"
          src={this.props.image}
          alt={this.props.alt}
          style={{
            position: "absolute",
            left: "0",
            right: "0",
            margin: "auto",
            marginTop: "100px",
            transform: this._transform,
          }}
        />
      </div>
    );
  }
}

export default Card;

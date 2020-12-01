import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    const { votes } = this.props;
    let borderColor =
      votes <= 0
        ? "black"
        : votes > 0 && votes <= 5
        ? "red"
        : votes > 5 && votes < 10
        ? "yellow"
        : votes >= 10
        ? "green"
        : "";
    return (
      <div className="Joke">
        <div className="Joke-buttons">
          <i
            className="Joke-arrow fas fa-arrow-up"
            onClick={this.props.upVote}
          />
          <span
            className="Joke-votes"
            style={{ border: `2px solid ${borderColor}` }}
          >
            {this.props.votes}
          </span>
          <i
            className="Joke-arrow fas fa-arrow-down"
            onClick={this.props.downVote}
          />
        </div>
        <div className="Joke-text">{this.props.joke}</div>
      </div>
    );
  }
}

export default Joke;

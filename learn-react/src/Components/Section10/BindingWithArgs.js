import React, { Component } from "react";

class BindingWithArgs extends Component {
  static defaultProps = {
    colors: ["red", "blue", "green", "yellow", "orange"],
  };
  constructor(props) {
    super(props);
    this.state = { color: "cyan" };
  }

  changeColor = (color) => {
    this.setState({ color: color });
  };
  render() {
    return (
      <div className="buttonList" style={{ backgroundColor: this.state.color }}>
        {this.props.colors.map((c) => {
          const colorObj = { backgroundColor: c };
          return (
            <button style={colorObj} onClick={this.changeColor.bind(this, c)}>
              Click on me!
            </button>
          );
        })}
      </div>
    );
  }
}

export default BindingWithArgs;

import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import NavBar from "./NavBar";
import "rc-slider/assets/index.css";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex", snackBar: false };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
    this.snackBar = this.snackBar.bind(this);
  }
  changeLevel(level) {
    this.setState({ level: level });
  }
  changeFormat(val) {
    this.setState({
      format: val,
    });
  }
  snackBar() {
    setTimeout(() => {
    this.setState({ snackBar: true });
    }, 2000);
    setTimeout(() => {
      this.setState({ snackBar: false });
    }, 7000);
  }
  render() {
    const { level, format, snackBar } = this.state;
    const { colors } = this.props.palette;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        key={color.name}
        background={color[format]}
        name={color.name}
        snackBar={this.snackBar}
      />
    ));
    return (
      <div className="Palette">
        <NavBar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          snackBar={snackBar}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}

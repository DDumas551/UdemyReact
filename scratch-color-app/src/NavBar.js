import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./NavBar.css";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ format: e.target.value });
    this.props.handleChange(e.target.value);
  }
  render() {
    console.log(this.props.snackBar);
    const { level, changeLevel, snackBar } = this.props;
    const { format } = this.state;
    return (
      <header className="NavBar">
        <div className="logo">
          <a href="/">reactcolorpicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #eeeeee</MenuItem>
            <MenuItem value="rgb">RGB - rgb 255,255,255</MenuItem>
            <MenuItem value="rgba">RGBa - rgb 255,255,255,1.0</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={snackBar}
          message={<span id="message-id">Copied! </span>}
          ContentProps={{ "aria-describedby": "message-id" }}
          action={[
            <IconButton color="inherit" aria-label="close">
              <CloseIcon />
            </IconButton>,
          ]}
        ></Snackbar>
      </header>
    );
  }
}

import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Slider from "rc-slider";
import { Link } from "react-router-dom";
import "rc-slider/assets/index.css";
import "./NavBar.css";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", type: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSnackBar = this.handleSnackBar.bind(this);
  }

  handleChange(e) {
    this.setState({ format: e.target.value });
    this.props.handleChange(e.target.value);
  }
  handleSnackBar() {
    this.setState({ type: true });
    setTimeout(() => this.setState({ type: false }), 3500);
  }
  render() {
    // console.log(this.props.snackBar);
    const { level, changeLevel, snackBar } = this.props;
    const { format, type } = this.state;
    return (
      <header className="NavBar">
        <div className="logo">
          <Link to="/">reactcolorpicker</Link>
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
            <MenuItem onClick={this.handleSnackBar} value="hex">
              HEX - #eeeeee
            </MenuItem>
            <MenuItem onClick={this.handleSnackBar} value="rgb">
              RGB - rgb 255,255,255
            </MenuItem>
            <MenuItem onClick={this.handleSnackBar} value="rgba">
              RGBa - rgb 255,255,255,1.0
            </MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={type}
          message={
            <span id="message-id">{this.state.format.toUpperCase()} </span>
          }
          ContentProps={{ "aria-describedby": "message-id" }}
          action={[
            <IconButton color="inherit" aria-label="close">
              <CloseIcon />
            </IconButton>,
          ]}
        ></Snackbar>
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

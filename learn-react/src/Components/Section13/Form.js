import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    alert(`You typed ${this.state.username}`);
    this.setState({ username: "" });
  }
  render() {
    return (
      <div>
        <h1>Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username" />
          <input
            name="username"
            id="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        {/* <p>{this.state.username}</p> */}
      </div>
    );
  }
}

export default Form;

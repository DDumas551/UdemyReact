import React, { Component } from "react";
import uuid from "uuid/v4";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitToDo({ ...this.state, id: uuid(), completed: false });
    this.setState({
      task: "",
    });
  }

  render() {
    return (
      <div>
        <h3>New ToDo</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="newToDo"></label>
          <input
            name="task"
            id="newToDo"
            value={this.state.task}
            onChange={this.handleChange}
            type="text"
            placeholder="New ToDo"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;

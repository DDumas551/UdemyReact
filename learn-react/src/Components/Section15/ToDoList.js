import React, { Component } from "react";
import ToDoComp from "./ToDoComp";
import uuid from "uuid/v4";
import Form from "./Form";
import "./Todo.css";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { task: "Walk the fish", id: uuid() },
        { task: "Water the dog", id: uuid() },
      ],
    };
    this.submitToDo = this.submitToDo.bind(this);
    this.remove = this.remove.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }
  remove(id) {
    this.setState({
      todos: this.state.todos.filter((t) => t.id !== id),
    });
  }
  submitToDo(todo) {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  }
  updateTodo(id, updatedTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos,
    });
  }
  toggleComplete(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos,
    });
  }
  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <ToDoComp
          key={todo.id}
          id={todo.id}
          task={todo.task}
          removeTodo={this.remove}
          updateTodo={this.updateTodo}
          completed={todo.completed}
          toggleComplete={this.toggleComplete}
        />
      );
    });
    return (
      <div>
        <h1>Todo List!</h1>
        <ul>{todos}</ul>
        <Form submitToDo={this.submitToDo} />
      </div>
    );
  }
}

export default ToDoList;

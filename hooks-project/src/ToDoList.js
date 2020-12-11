import { render } from "@testing-library/react";
import React from "react";
import ToDo from "./ToDo";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";

export default function ToDoList({ todos, removeToDo, toggleToDo, editToDo }) {
  if (!todos.length) {
    return <h1>Nothing to See here!</h1>;
  } else {
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <ToDo
                key={todo.id}
                id={todo.id}
                toggleToDo={toggleToDo}
                task={todo.task}
                completed={todo.completed}
                removeToDo={removeToDo}
                editToDo={editToDo}
              />
              {i < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  }
}

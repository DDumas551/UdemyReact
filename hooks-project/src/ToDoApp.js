import React, { useEffect } from "react";
import useToDoState from "./Hooks/useToDoState";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

function ToDoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || []);
  const { todos, addToDo, removeToDo, toggleToDo, editToDo } = useToDoState(
    initialTodos
  );

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={9} lg={6}>
          <ToDoForm addToDo={addToDo} />
          <ToDoList
            todos={todos}
            removeToDo={removeToDo}
            toggleToDo={toggleToDo}
            editToDo={editToDo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ToDoApp;
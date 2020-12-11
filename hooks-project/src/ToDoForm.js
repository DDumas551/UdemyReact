import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import useInputState from "./Hooks/useInputState";

export default function ToDoForm({ addToDo }) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <div>
      <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addToDo(value);
            reset();
          }}
        >
          <TextField
            onChange={handleChange}
            value={value}
            margin="normal"
            label="Add ToDo"
            fullWidth
          />
        </form>
      </Paper>
    </div>
  );
}

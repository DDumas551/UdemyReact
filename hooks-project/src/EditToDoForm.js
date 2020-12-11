import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./Hooks/useInputState";

export default function EditToDoForm({ id, editToDo, task, toggle }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editToDo(id, value);
        reset();
        toggle();
      }}
    >
      <TextField margin="normal" value={value} onChange={handleChange} autoFocus />
    </form>
  );
}

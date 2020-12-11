import React from "react";
import useToggle from "./Hooks/useToggle";
import EditToDoForm from "./EditToDoForm";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

export default function ToDo({
  task,
  id,
  completed,
  removeToDo,
  editToDo,
  toggleToDo,
}) {
  const [isEditing, toggle] = useToggle();
  return (
    <div>
      <ListItem>
        {isEditing ? (
          <EditToDoForm id={id} task={task} editToDo={editToDo} toggle={toggle} />
        ) : (
          <>
            <Checkbox
              tabIndex={-1}
              checked={completed}
              onClick={() => toggleToDo(id)}
            />
            <ListItemText
              style={{ textDecoration: completed ? "line-through" : "" }}
            >
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton>
                <EditIcon aria-label="edit" onClick={toggle} />
              </IconButton>
              <IconButton onClick={() => removeToDo(id)}>
                <DeleteIcon aria-label="delete" />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
    </div>
  );
}

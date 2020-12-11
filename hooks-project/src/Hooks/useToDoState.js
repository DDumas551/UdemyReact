import { useState } from "react";
import uuid from "uuid/v4";


export default (initialToDos) => {
  const [todos, setToDos] = useState(initialToDos);
  return {
    todos,
    addToDo: (newToDoText) => {
      setToDos([...todos, { id: uuid(), task: newToDoText, completed: false }]);
    },
    removeToDo: (todoId) => {
      const updatedToDos = todos.filter((todo) => todo.id !== todoId);
      setToDos(updatedToDos);
    },
    toggleToDo: (todoId) => {
      const updatedToDos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setToDos(updatedToDos);
    },
    editToDo: (todoId, newTask) => {
      const updatedToDos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setToDos(updatedToDos);
    },
  };
};

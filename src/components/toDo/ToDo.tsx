import React from "react";
import './toDo.scss';

type ToDoProps = {
  todo: {
    text: string;
  };
};

const Todo = ({ todo }: ToDoProps) => {
  return <div className="todo">{todo.text}</div>;
};

export default Todo;

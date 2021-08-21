import React from "react";

type ToDoProps = {
  todo: {
    text: string;
  };
};

const Todo = ({ todo }: ToDoProps) => {
  return <div className="todo">{todo.text}</div>;
};

export default Todo;

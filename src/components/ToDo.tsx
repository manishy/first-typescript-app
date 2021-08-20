import React from "react";

type ToDoProps = {
  index: number;
  todo: {
    text: string;
  };
};

const Todo = ({ index, todo }: ToDoProps) => {
  return <div className="todo">{todo.text}</div>;
};

export default Todo;

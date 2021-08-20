import React, { useState } from 'react';
import './app.scss';
import Todo from '../ToDo';
import ToDoForm from '../TodoForm'
import CustomUpload from "../customUpload";


const App = (): any => {
  const [toDos, setTodos] = useState([
    {
      text: "Have to play cricket",
      isCompleted: false
    },
    {
      text: "Read book",
      isCompleted: false
    },
    {
      text: "Cook food",
      isCompleted: false
    }]
  );

  const addTodo = (text: string) => {
    const newTodos: any = [...toDos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <CustomUpload />
      <span className="todo-list">
        {toDos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />))}
        <ToDoForm addTodo={addTodo} />
      </span>
    </div>
  );
};

export default App;

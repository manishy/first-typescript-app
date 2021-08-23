import React, { useState } from 'react';
import './app.scss';
import Todo from '../toDo';
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
      <div className="todo-list">
        {toDos.map((todo, index) => (
          <Todo key={index} todo={todo} />))}
        <ToDoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;

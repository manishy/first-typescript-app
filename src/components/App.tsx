import React, { useState } from 'react';
import '../App.css';
import Todo from './ToDo';
import ToDoForm from './TodoForm'
import CustomUpload from "./CustomUpload";


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

  const addTodo= (text: string) =>{
    const newTodos: any = [...toDos, {text}];
    setTodos(newTodos);
  };

  return (
      <div className="app">
        <div
            // className={"custom-upload"}
        >
          <CustomUpload/>
        </div>
        <div className="todo-list">
          {toDos.map((todo, index) => (
              <Todo key={index} index={index} todo={todo} />))}
          <ToDoForm addTodo={addTodo}/>
        </div>
      </div>
  );
};

export default App;

import React, { useState } from 'react';
import './App.css';


type ToDoProps = {
  index: number,
  todo: {
    text: string
  }
};

type ToDoFormProps = {
  addTodo: (text: string)=>void
};

const Todo = ({ index, todo }: ToDoProps) => {
  return (
      <div className="todo">
        {todo.text}
      </div>
  );
};

const TodoForm = ({addTodo}: ToDoFormProps)=>{
  const [value, setValue] = useState('');
  const handleSubmit = (e:any)=>{
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  };
  return (
      <form onSubmit ={handleSubmit}>
        <input type="text" className="input" value={value} onChange={e=>setValue(e.target.value)}/>
      </form>
  );
};

const App = () => {
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
    const newTodos: any = [... toDos, {text}];
    setTodos(newTodos);
  }

  return (
      <div className="app">
        <div className="todo-list">
          {toDos.map((todo, index) => (
              <Todo key={index} index={index} todo={todo} />))}
          <TodoForm addTodo={addTodo}/>
        </div>
      </div>
  );
};

export default App;

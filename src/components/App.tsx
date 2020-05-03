import React, { useState } from 'react';
import '../App.css';
import Todo from './ToDo';
import ToDoForm from './TodoForm'
import UploadIcon from "./UploadIcon";
import CustomUpload from "./CustomUpload";


// const CustomUpload =(): any =>{
//   return (<div className={"file-upload"}>
//     <input type="file" id={"upload-1"} name={"name"} className={"custom-upload"}
//         // accept={mediaFileFormats.split(',').map(x => `.${x}`).join(', ')}
//         // style={{ display: 'none' }}
//         // onChange={this.onFileSelect}
//     />
//     <UploadIcon
//         className={"Icon"}
//         style={{ fill: "green", borderColor: "black" }}
//     />
//     {/*<label className="custom-file-label" >Choose file</label>*/}
//   </div>);
// }

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
        <div>
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

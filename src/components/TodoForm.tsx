import {useState} from "react";
import React from "react";

type ToDoFormProps = {
    addTodo: (text: string)=>void
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

export default TodoForm;

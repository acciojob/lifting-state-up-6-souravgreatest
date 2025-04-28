import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";'./TodoList.js';

const App = () => {
  const [todos,setTodos]=useState([
    {text:"Learn React",completed:false},
    {text:"Build a React app",completed:false},
    {text:"Deploy the React app",completed:false}
  ]);
  const handleComplete=(index)=>{
    let newTodo=[...todos];
    newTodo[index].completed=true;
    setTodos(newTodo);
  }
  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList arr={todos} handleComplete={handleComplete} />
    </div>
  )
}

export default App

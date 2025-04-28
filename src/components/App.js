import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  const [todos,setTodos]=useState([
    {text:"Learn React",completed:false},
    {text:"Build a React app",completed:false},
    {text:"Deploy the React app",completed:false}
  ]);

  const handleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = true;
    setTodos(updatedTodos); // Update the state
  };

  return (
    <div>
      <h3>Todo App</h3>
      <TodoList arr={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;


/*
const [todos,setTodos]=useState([
  {text:"Learn React",completed:false},
  {text:"Build a React app",completed:false},
  {text:"Deploy the React app",completed:false}
]);

*/
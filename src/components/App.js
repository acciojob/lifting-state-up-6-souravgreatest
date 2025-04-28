import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  const [todos,setTodos]=useState([
    {text:"Learn React",completed:false},
    {text:"Build a React app",completed:false},
    {text:"Deploy the React app",completed:false}
  ]);

  function handleComplete(idx) {
    const updatedTodos = todos.map((todo, index) =>
      index === idx ? { ...todo, state: true } : todo
    );
    setTodos(updatedTodos);
  }


  return (
    <div>
      <h3>Todo App</h3>
      <TodoList arr={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
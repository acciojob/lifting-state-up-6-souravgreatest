import React from "react";

const TodoList = ({ arr, handleComplete }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {arr.map((item, index) => (
          <li key={index}>
            <span>{item.text}</span>
            <button
              onClick={() => handleComplete(index)}
              style={{ display: item.completed ? "none" : "inline" }}
            >
              Complete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

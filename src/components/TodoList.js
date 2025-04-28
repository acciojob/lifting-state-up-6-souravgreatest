import React from "react";

const TodoList = ({ arr, handleComplete }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {arr.map((item, index) => (
          <li key={index}>
            <span>{item.text}</span>
            {!item.completed && <button
              onClick={() => handleComplete(index)}
            >
              Complete
            </button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

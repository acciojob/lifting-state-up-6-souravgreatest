import React from 'react';

const TodoList = ({ arr, handleComplete }) => {
  return (
    <div>
      <h2>Child Component</h2>
      {arr.map((item, index) => ( 
        <div key={index}>
          <span>{item.text}</span>
          {!item.completed && (<button onClick={() => handleComplete(index)}>Complete</button>)}
        </div>
      ))}
    </div>
  );
}

export default TodoList;

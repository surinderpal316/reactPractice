import React, { memo } from 'react';

function Todo({ todos, addTodo }) {
  console.log("todoRendered");

  return (
    <>
      <h2>My Todo</h2>
      {todos.map((todo, index) => (
        <p key={index}>{todo + index}</p>
      ))}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
}

export default memo(Todo);

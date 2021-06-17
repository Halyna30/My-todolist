import React, { useState } from 'react';

function TodoForm() {
  const [input, setInput] = useState('');

  return (
    <div>
      <form className="todo-form">
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
        ></input>
        <button className="btnAdd">Add todo</button>
      </form>
    </div>
  );
}

export default TodoForm;

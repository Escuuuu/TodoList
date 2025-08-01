import React, { useState } from 'react';


function TodoList() {
  const [list, setList] = useState([]);

  const handleAdd = () => {
    const input = document.getElementById('todoInput');
    let newValue = input.value.trim();
    if (!newValue) return;
    input.value = '';
    setList(l => [...l, newValue]);
  };

  const handleDelete = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div className="todoWrapper">
      <div className="todoContainer">
        <h1 className="todoHeading">Just do it</h1>
        <div className="todoInputBox">
          <input
            id="todoInput"
            placeholder="Enter task"
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          />
          <button className="todoButton" onClick={handleAdd}>+</button>
        </div>
        <ul>
          {list.map((l, index) => (
            <li key={index}>
              {l}
              <button className="deleteBtn" onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;

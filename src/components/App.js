import React, { useState } from "react";
import UseMemo from "./UseMemo";
import '../styles/App.css'
import ReactMemo from "./ReactMemo";

const App = () => {
  const [todo, setTodo] = useState(["New Todo"]);

  const addTodo = () => {
    setTodo([...todo, "New Todo"]);
  };

  return (
    <div id="main">
      <h1>React.useMemo</h1>
      <h1>My todos</h1>
      <ul className="todo">{todo && todo.map((task, id) => <li key={id}>{task}</li>)}</ul>
      <button id="add-todo-btn" style={{ margin: "1rem 0" }} onClick={addTodo}>
        Add Todo
      </button>
      <hr />
      <UseMemo /><hr/>
      <ReactMemo />
    </div>
  );
};

export default App;

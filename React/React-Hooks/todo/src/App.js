import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index }) {
  return (
    <div
      className="todo"
      style={{ fontWeight: "bold", fontSize: 20, width: "auto" }}
    >
      {todo.text}
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Add Todo..."
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Shopping",
      isCompleted: false
    },
    {
      text: "Run",
      isCompleted: false
    },
    {
      text: "Bike",
      isCompleted: false
    },
    {
      text: "Homework",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div
        className="todo-list"
        style={{
          width: 300,
          alignItems: "center",
          paddingLeft: "25%",
          paddingTop: 20
        }}
      >
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}

        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;

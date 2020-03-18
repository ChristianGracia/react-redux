import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

//interface creates a new type. extendable.
interface ITodo {
  text: string;
  complete: boolean;
}
//extended
interface ITodo1 extends ITodo {
  tags: string[];
}
//type refers to a type that already exists
type formElem = React.FormEvent<HTMLFormElement>;
export default function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: formElem): void => {
    e.preventDefault();
    addTodo(value);
    console.log(todos);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };
  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
    console.log("completed");
  };

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <Fragment>
      <h1>Typescript</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => (
          <Fragment key={index}>
            <div
              style={{ textDecoration: todo.complete ? "line-through" : "" }}
            >
              {todo.text}
            </div>
            <button type="button" onClick={() => completeTodo(index)}>
              {todo.complete ? "Incomplete" : "Complete"}
            </button>
            <button type="button" onClick={() => removeTodo(index)}>
              Remove Todo
            </button>
          </Fragment>
        ))}
      </section>
    </Fragment>
  );
}

const root = document.getElementById("app-root");
ReactDOM.render(<App />, root);

import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

//interface creates a new type. extendable.
interface: ITodo {
  text: string,
  complete: boolean
}
//extended
interface: ITodo1 extends ITodo {
  tags: string[]
}
//type refers to a type that already exists
type formElem = React.FormEvent<HTMLFormElement>;
export default function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<Itodo[]>([]);

  const handleSubmit = (e: formElem): void => {
    e.preventDefault();
    setValue("");
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
    </Fragment>
  );
}

const root = document.getElementById("app-root");
ReactDOM.render(<App />, root);

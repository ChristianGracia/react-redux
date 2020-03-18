import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

export default function App() {
  const reducer = (state, action) => {
    console.log(action);
    const obj = {
      ADD: state + 1,
      SUB: state - 1,
      RES: (state = 0)
    };

    console.log(action);
    console.log(obj);
    return state;
  };
  //const [value, setValue] = React.useState("");

  const [count, dispatch] = React.useReducer(reducer, 0);
  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch("ADD")}>+</button>
      <button onClick={() => dispatch("SUB")}>-</button>
      <button>reset</button>
    </>
  );
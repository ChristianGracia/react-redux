import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

export default function App() {
  const reducer = (state, action) => {
    switch (action) {
      case "ADD":
        return state + 1;
      case "SUB":
        return state - 1;
      case "RES":
        return (state = 0);
      default:
        return state;
    }
  };
  //const [value, setValue] = React.useState("");

  const [count, dispatch] = React.useReducer(reducer, 0);
  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch("ADD")}>+</button>
      <button onClick={() => dispatch("SUB")}>-</button>
      <button onClick={() => dispatch("RES")}>reset</button>
    </>
  );
}

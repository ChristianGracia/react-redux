import React from "react";
import "./styles.css";
import { checkPropTypes } from "prop-types";

const { Provider, Consumer } = React.createContext();
export function Parent(props) {
  const text = "random text";
  return <Provider value={text}>{props.children}</Provider>;
}
export function Child() {
  return <Consumer>{text => <div>{text}</div>}</Consumer>;
}
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

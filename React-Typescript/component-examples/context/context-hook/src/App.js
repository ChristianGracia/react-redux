import React from "react";
import "./styles.css";
import { checkPropTypes } from "prop-types";

const Store = React.createContext();
export function Parent(props) {
  const obj = { text: "random text" };
  return <Store.Provider value={obj}>{props.children}</Store.Provider>;
}
export function Child() {
  const hook = React.useContext(Store);
  return <div>{hook.text}</div>;
}
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

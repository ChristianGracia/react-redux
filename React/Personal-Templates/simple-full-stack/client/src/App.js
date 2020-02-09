import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>Test page</p>
      <button
        onClick={() =>
          fetch("http://localhost:3001", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          })
            .then(data => data.json())
            .then(data => console.log(data))
        }
      >
        call api
      </button>
    </div>
  );
}

export default App;

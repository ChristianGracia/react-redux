import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: "John Josephs",
          id: "1"
        },
        {
          name: "Mary Winter",
          id: "2"
        },
        {
          name: "Mark Bates",
          id: "3"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.people.map(person => (
          <h1 key={person.id}>{person.name}</h1>
        ))}
      </div>
    );
  }
}
export default App;

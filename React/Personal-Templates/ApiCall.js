import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ people: users }));
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

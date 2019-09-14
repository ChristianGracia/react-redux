import React, { Component } from "react";
import { CardList } from "./components/card-list-component";
import "./App.css";

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
        <CardList name="chris">
          <h1>hello</h1>
        </CardList>
        {this.state.people.map(person => (
          <h1 key={person.id}>{person.name}</h1>
        ))}
      </div>
    );
  }
}
export default App;

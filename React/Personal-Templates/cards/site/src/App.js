import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list-component";
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
        <CardList people={this.state.people} />
      </div>
    );
  }
}
export default App;

import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list-component";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      images: [],
      names: [],
      imageUrl: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ people: users }));

    for (var i = 0; i < 20; i++) {
      fetch("https://randomuser.me/api/")
        .then(data => data.json())
        .then(data => {
          var name = `${data.results[0].name.first} ${data.results[0].name.last}`;
          console.log(name);
          this.setState({
            names: [...this.state.names, name],
            imageUrl: data.results[0].picture.medium
          });
        });
    }
    console.log(this.state.names);
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

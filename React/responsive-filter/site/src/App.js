import React, { Component } from "react";
import RenderItems from "./RenderItems";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [
        "chris  ",
        "john  ",
        "jake  ",
        "joe  ",
        "joseph  ",
        "jork  ",
        "brad  ",
        "steve  ",
        "susan  "
      ],
      query: ""
    };
  }
  componentDidMount() {
    fetch("https://baconipsum.com/api/?type=meat-and-filler")
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }

  render() {
    const { people, query } = this.state;
    const filteredItems = people.filter(person =>
      person.toLowerCase().includes(query.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Hi</h1>
        <input
          type="search"
          onChange={e => {
            this.setState({ query: e.target.value });
          }}
          value={this.state.query}
        />

        <RenderItems query={filteredItems} />
      </div>
    );
  }
}
export default App;

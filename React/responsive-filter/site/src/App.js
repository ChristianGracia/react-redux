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

  render() {
    const { people, query } = this.state;

    const filteredItems = people.filter(person => {
      person.includes(query);
    });

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
        <p>{filteredItems}</p>
        <RenderItems query={filteredItems} />
      </div>
    );
  }
}
export default App;

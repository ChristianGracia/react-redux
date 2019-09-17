import React, { Component } from "react";
import CardDisplay from "./components/card-display/card-display-component";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [
        "chris",
        "john",
        "jake",
        "joe",
        "joseph",
        "jork",
        "brad",
        "steve",
        "susan"
      ]
    };
  }

  render() {
    const { people } = this.state;
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
      </div>
    );
  }
}
export default App;

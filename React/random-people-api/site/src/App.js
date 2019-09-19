import React, { Component } from "react";
import CardDisplay from "./components/card-display/card-display-component";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <CardDisplay />
      </div>
    );
  }
}
export default App;

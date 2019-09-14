import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list-component";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <CardList />
      </div>
    );
  }
}
export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hungryLevel: 100
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    //increment prop would be in index.js
    //used when setting state to this.state for safe state change
    this.setState(
      (prevState, prevProps) => {
        return {
          hungryLevel: this.state.hungryLevel + 1
        };
      },
      () => console.log(this.state.hungryLevel)
    );
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.hungryLevel}</p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.handleClick}>update state</button>
        </header>
      </div>
    );
  }
}

export default App;

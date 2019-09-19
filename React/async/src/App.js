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
    this.setState({ hungryLevel: 200 });
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

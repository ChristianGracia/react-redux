import React, { Component } from "react";
import Card from "../card/card-function";
import "./card-list.styles.css";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      movieArray: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // fetch(
    //   "https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?s=dogs&apikey=791727ae"
    // )
    //   .then(data => data.json())
    //   .then(data => {
    //     var joined = this.state.movieArray.concat(data.Search);
    //     this.setState({ movieArray: joined });
    //   });
  }

  handleClick(e) {
    fetch(
      `https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?s=${this.state.query}&apikey=791727ae`
    )
      .then(data => data.json())
      .then(data => {
        var joined = this.state.movieArray.concat(data.Search);
        this.setState({ movieArray: joined });
      });
  }

  handleChange(e) {
    this.setState({ query: e.nativeEvent.target.value });
  }
  render() {
    return (
      <div>
        <h1>Movie Search</h1>
        <input
          type="search"
          placeholder="Search movies"
          onChange={this.handleChange}
          value={this.state.query}
        />
        <input type="submit" onClick={this.handleClick} />
        <div style={{ padding: 10 }}></div>
        <div className="card-list">
          <Card search={this.state.movieArray} />
        </div>
      </div>
    );
  }
}
export default CardList;

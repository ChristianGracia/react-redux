import React, { Component } from "react";
import Card from "../card/card-function";
import "./card-list.styles.css";

import Button from "react-bootstrap/Button";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      movieArray: [],
      showHeader: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    var queryTitle = this.state.query.replace(/\s+/g, "%20");

    var url =
      "http://www.omdbapi.com/?s=%27" + queryTitle + "%27&apikey=791727ae";
    fetch(url)
      .then(data => data.json())
      .then(data => {
        var joined = this.state.movieArray.concat(data.Search);
        this.setState({ movieArray: joined, showHeader: false });
      });
  }

  handleChange(e) {
    this.setState({ query: e.nativeEvent.target.value });
  }
  render() {
    return (
      <div>
        {this.state.showHeader ? (
          <div>
            <h1 style={{ fontSize: 50, marginTop: "40vh" }}>Movie Search</h1>
          </div>
        ) : null}

        <i
          className="fas fa-search mr-2"
          style={{ fontSize: 18, marginTop: 30 }}
        ></i>
        <input
          type="search"
          placeholder="search movie database"
          onChange={this.handleChange}
          value={this.state.query}
        />

        <Button className="ml-3" type="submit" onClick={this.handleClick}>
          Search
        </Button>

        <div style={{ padding: 50 }}></div>
        <div className="card-list">
          <Card search={this.state.movieArray} />
        </div>
      </div>
    );
  }
}
export default CardList;

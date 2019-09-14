import React, { Component } from "react";
import Card from "../card/card-component";
import "./card-list.styles.css";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ query: e.nativeEvent.target.value });
    console.log(this.state.query);
  }
  render() {
    return (
      <div>
        <h1>FriendFinder</h1>
        <input
          type="search"
          placeholder="Search random 25"
          onChange={this.handleChange}
        />
        <div style={{ padding: 10 }}></div>
        <div className="card-list">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}
export default CardList;

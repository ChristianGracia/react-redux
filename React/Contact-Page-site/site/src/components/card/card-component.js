import React, { Component } from "react";
import { ImageGetter } from "../images/image-component";
import "./card-style.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", imageUrl: "", email: "", cell: "" };
  }
  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/https://randomuser.me/api/")
      .then(data => data.json())
      .then(data => {
        this.setState({
          name: `${data.results[0].name.first} ${data.results[0].name.last}`,
          imageUrl: data.results[0].picture.large,
          location:
            data.results[0].location.street +
            ", " +
            data.results[0].location.city +
            ", " +
            data.results[0].location.state,
          email: data.results[0].email,
          cell: data.results[0].cell
        });
      });
  }

  render() {
    return (
      <div className="card-container">
        <ImageGetter url={this.state.imageUrl} />
        <p className="fields">Email: {this.state.email}</p>
        <p className="fields">Name: {this.state.name}</p>
        <p className="fields">Address: {this.state.location}</p>
        <p className="fields">Cell: {this.state.cell}</p>
      </div>
    );
  }
}
export default Card;

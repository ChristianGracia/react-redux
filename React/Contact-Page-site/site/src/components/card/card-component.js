import React, { Component } from "react";
import { ImageGetter } from "../images/image-component";
import "./card-style.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", imageUrl: "" };
  }
  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/https://randomuser.me/api/")
      .then(data => data.json())
      .then(data => {
        this.setState({
          name: `${data.results[0].name.first} ${data.results[0].name.last}`
        });

        console.log(data.results[0].picture.medium);

        // var images = this.state.images.push(data.results[0].picture.medium);

        this.setState({
          imageUrl: data.results[0].picture.medium
        });
      });
  }

  render() {
    return (
      <div className="card-container">
        <ImageGetter url={this.state.imageUrl} />
        <p>{this.state.name}</p>
      </div>
    );
  }
}
export default Card;

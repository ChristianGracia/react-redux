import React, { Component } from "react";
import { ImageGetter } from "../images/image-component";

import "./card-style.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/https://randomuser.me/api/")
      .then(data => data.json())
      .then(data => {
        this.setState({});
      });
  }

  render() {
    return (
      <div className="card-container">
        <ImageGetter url={this.state.imageUrl} />
      </div>
    );
  }
}
export default Card;

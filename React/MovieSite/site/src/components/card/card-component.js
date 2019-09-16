import React, { Component } from "react";
import { ImageGetter } from "../images/image-component";

import "./card-style.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.search,
      name: ""
    };
  }

  componentDidUpdate() {
    // console.log(this.props.search[0].Title);
    // console.log("hi");
    console.log(this.props.search);
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

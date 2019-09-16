import React, { Component } from "react";
import { ImageGetter } from "../images/image-component";

import "./card-style.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // console.log(this.props.search);
  }

  render() {
    return (
      <div className="card-container">
        <ImageGetter url={this.state.imageUrl} />
        <p>{}</p>
      </div>
    );
  }
}
export default Card;

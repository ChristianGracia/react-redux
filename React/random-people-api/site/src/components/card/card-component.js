import React, { Component } from "react";
import { ImageGetter } from "../images/image-component";
import { CardInfo } from "../card-info/card-info-component";

import "./card-style.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imageUrl: "",
      email: "",
      cell: "",
      search: ""
    };
  }
  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/https://randomuser.me/api/")
      .then(data => data.json())
      .then(data => {
        const name = `${data.results[0].name.first} ${data.results[0].name.last}`;

        const nameArray = name.split(" ");
        const firstName =
          nameArray[0].substr(0, 1).toUpperCase() + nameArray[0].substr(1);
        const lastName =
          nameArray[1].substr(0, 1).toUpperCase() + nameArray[1].substr(1);

        this.setState({
          name: firstName + " " + lastName,
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
        <CardInfo
          email={this.state.email}
          name={this.state.name}
          location={this.state.location}
          cell={this.state.cell}
        />
        <p>d{this.state.search}</p>
      </div>
    );
  }
}
export default Card;

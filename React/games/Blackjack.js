import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class Game extends Component {
  constructor(props) {
    super(props);

    const hearts = <i style={{ color: "red" }} class="fas fa-heart"></i>;

    this.state = {
      userCards: [],
      dealerCards: [],
      suits: ["clubs", hearts, "spades", "diamonds"],
      cards: [
        "ace",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "jack",
        "queen",
        "king"
      ]
    };
  }

  render() {
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
            paddingTop: 30,
            fontSize: 50,
            fontWeight: "bold"
          }}
        >
          Blackjack
        </h1>
        <div
          style={{
            textAlign: "center",
            paddingTop: 70,
            fontSize: 50,
            fontWeight: "bold",
            margin: "auto"
          }}
        >
          <div style={{ backgroundColor: "green", color: "white" }}>
            <p>
              Dealer: {this.state.cards[Math.floor(Math.random() * 13) + 2]}{" "}
              {this.state.suits[Math.floor(Math.random() * 4)]}
            </p>
            <div style={{ padding: 20 }}></div>
            <p>
              You: {this.state.cards[Math.floor(Math.random() * 13) + 2]}{" "}
              {this.state.suits[Math.floor(Math.random() * 4)]}
            </p>
          </div>
          <div style={{ padding: 20 }}>
            <Button style={{ padding: 20 }}>
              <span>Hit</span>
            </Button>
            <div style={{ padding: 20 }}></div>
            <Button style={{ padding: 20 }}>
              <span>Stay</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

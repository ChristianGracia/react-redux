import React from "react";
import "./card-style.css";

export const Card = props => (
  <div className="card-container">
    <img alt="person" src="https://picsum.photos/200" />
    <h1>{props.person.name}</h1>
  </div>
);

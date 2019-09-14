import React from "react";
import { ImageGetter } from "../images/image-component";
import "./card-style.css";

export const Card = props => (
  <div className="card-container">
    <ImageGetter />
    <h1>{props.person.name}</h1>
  </div>
);

import React from "react";
import Button from "react-bootstrap/Button";
import "./card.styles.css";

export default function Card(props) {
  return (
    <div class="card-list">
      {props.search.map(item => {
        return (
          <div key={item.imdbID} className="movies col-sm">
            <p>{item.Title}</p>
            <p>{item.Year}</p>
            <img src={item.Poster} />
            <Button>
              <p>hi</p>
            </Button>
          </div>
        );
      })}
    </div>
  );
}

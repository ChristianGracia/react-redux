import React from "react";
import Button from "react-bootstrap/Button";
import "./card.styles.css";

export default function Card(props) {
  return (
    <div className="card-list">
      {props.search.map(item => {
        return (
          <div key={item.imdbID} className="col-sm">
            <p>
              {item.Title}, {item.Year}
            </p>

            <img className="movies" src={item.Poster} />
            <Button>
              <p>See More</p>
            </Button>
          </div>
        );
      })}
    </div>
  );
}

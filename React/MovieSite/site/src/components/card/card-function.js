import React from "react";

export default function Card(props) {
  return (
    <div>
      {props.search.map(item => {
        return (
          <div key={item.imdbID}>
            <p>{item.Title}</p>
            <p>{item.Year}</p>
            <img src={item.Poster} />
            <p>{item.Actors}</p>
          </div>
        );
      })}
    </div>
  );
}

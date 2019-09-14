import React from "react";
import "./card-list.styles.css";

export const CardList = props => {
  return (
    <div className="card-list">
      {props.people.map(person => (
        <h1 key={person.id}>{person.name}</h1>
      ))}
      }
    </div>
  );
};

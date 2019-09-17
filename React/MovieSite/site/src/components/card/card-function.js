import React from "react";

export default function Card(props) {
  return (
    <div>
      {props.search.map(item => {
        return <h1>{item.Title}</h1>;
      })}
    </div>
  );
}

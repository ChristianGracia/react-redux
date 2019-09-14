import React from "react";

export const CardInfo = props => {
  return (
    <div>
      <p className="fields">Email: {props.email}</p>
      <p className="fields">Name: {props.name}</p>
      <p className="fields">Address: {props.location}</p>
      <p className="fields">Cell: {props.cell}</p>
    </div>
  );
};

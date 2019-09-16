import React from "react";

export const ImageGetter = props => {
  return (
    <div>
      <img alt="person" src={props.url} />
    </div>
  );
};

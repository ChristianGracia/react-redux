import React from "react";
import { Link } from "./node_modules/react-browser-dom";

export default function DynamicLink() {
  return (
    <div>
      <Link to={`${props.match.url}/13`}>topic 13</Link>
      <Link to={`${props.match.url}/20`}>topic 20</Link>
      <Link to={`${props.match.url}/33`}>topic 33</Link>
    </div>
  );
}

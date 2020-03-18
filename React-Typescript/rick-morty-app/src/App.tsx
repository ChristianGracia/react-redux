import React from "react";
import { Store } from "./Store";

export default function App(): JSX.Element {
  return (
    <React.Fragment>
      <h1>Ricky & Morty Video Picker</h1>
      <p>Pick your favorite episode!</p>
      {console.log(Store)}
    </React.Fragment>
  );
}

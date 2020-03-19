import React from "react";
import { Store } from "./Store";

export default function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    fetchDataAction();
  });
  const fetchDataAction = async () => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    console.log(data);
    const dataJSON = await data.json();
    console.log(dataJSON._embedded.episodes);
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    });
  };
  console.log(state);
  return (
    <React.Fragment>
      <h1>Ricky & Morty Video Picker</h1>
      <p>Pick your favorite episode!</p>
    </React.Fragment>
  );
}

import React from "react";
import { Store, IAction } from "./Store";
import "./index.css";

interface IEpisode {
  id: string;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
}

export default function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });
  const fetchDataAction = async () => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);

    const dataJSON = await data.json();

    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    });
  };
  const toggleFavoriteAction = (episode: IEpisode): IAction =>
    dispatch({
      type: "ADD_FAV",
      payload: episode
    });
  console.log(state);
  return (
    <React.Fragment>
      <header className="header"></header>
      <h1>Ricky & Morty Video Picker</h1>
      <p>Pick your favorite episode!</p>
      <section className="episodeLayout">
        {state.episodes.map((episode: IEpisode) => {
          return (
            <section key={episode.id} className="episode-box">
              <img
                src={episode.image.medium}
                alt={`Rick and morty ${episode.name}`}
              />
              <div>{episode.name}</div>
              <section>
                <div>
                  Seasion: {episode.season} Number: {episode.number}
                </div>
                <button
                  type="button"
                  onClick={() => toggleFavoriteAction(episode)}
                >
                  Favorite
                </button>
              </section>
            </section>
          );
        })}
      </section>
    </React.Fragment>
  );
}

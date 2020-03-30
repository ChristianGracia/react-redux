import React from "react";
import { IEpisode } from "./interfaces/interfaces";

export default function EpisodesList(props: any): Array<JSX.Element> {
  const { episodes, toggleFavAction, favorites } = props;

  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        <img
          src={episode.image.medium}
          alt={`Rick and morty ${episode.name}`}
        />
        <div>{episode.name}</div>
        <section>
          <div>
            Season: {episode.season} Number: {episode.number}
          </div>
          <button type="button" onClick={() => toggleFavAction(episode)}>
            {favorites.includes(episode) ? "Remove" : "Add"} Favorite
          </button>{" "}
        </section>
      </section>
    );
  });
}

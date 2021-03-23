import React from "react";
import Episode from "./Episode";

export default function Episodes(props) {
  console.log(props.episodes);
  return (
    <div data-testid="episodes-container" className="episodes">
      {props.episodes.map((episode) => (
        <Episode key={Date.now + 1} episode={episode} />
      ))}
    </div>
  );
}

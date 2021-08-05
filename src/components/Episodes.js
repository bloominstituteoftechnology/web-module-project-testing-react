import React from "react";
import Episode from "./Episode";

export default function Episodes(props) {
  return (
    <div data-testid="episodes-container" className="episodes">
      {props.episodes.map((episode, index) => (
        <Episode key={`${index}_${Date.now()}`} episode={episode} />
      ))}
    </div>
  );
}

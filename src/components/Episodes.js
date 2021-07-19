import React from 'react';
import Episode from './Episode';

export default function Episodes(props) {
  return (
    <div data-testid="episodes-container" className="episodes">
      {props.episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
    </div>
  );
}

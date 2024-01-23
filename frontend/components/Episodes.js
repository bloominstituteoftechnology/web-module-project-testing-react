import React from 'react';
import Episode from './Episode';

export default function Episodes(props) {
  return (
    <div data-testid="episodes-container" className="episodes">
      {props.episodes.map((episode, idx) => <Episode key={idx} episode={episode} />)}
    </div>
  );
}

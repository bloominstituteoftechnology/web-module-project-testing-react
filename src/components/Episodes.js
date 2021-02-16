import React from 'react';
import Episode from './Episode';

export default function Episodes(props) {
  return (
    <div className="episodes">
      {props.episodes.map(episode => <Episode episode={episode}/>)}
    </div>
  );
}

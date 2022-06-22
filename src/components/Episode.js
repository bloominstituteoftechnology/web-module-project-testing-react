import React from 'react';

const Episode = (props) => {
  const { episode } = props;
  const { id, image, name, season, number, summary, runtime } = episode;
  const imgsrc = image || 'https://i.ibb.co/2FsfXqM/stranger-things.png';

  console.log("episode: ", episode);

  return (
    <div className="episode" data-testid="episode" key={id}>
      <img className="episode-image" src={imgsrc} alt={imgsrc} />
      <div className="episode-info">
        <p className="episode-number">Season {season}, Episode {number}</p>
        <h3>{name}</h3>
        <p>{summary}</p>
        <div className="flex-spacer" />
        <p className="episode-runtime">{runtime} minutes</p>
      </div>
    </div>
  )
}

export default Episode;

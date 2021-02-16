import React from 'react';
import parse from 'html-react-parser';

const Episode = ({episode})=> {
    const {id, image, name, season, number, summary, runtime} = episode;

    console.log("image: ", image);

    return(<div className="episode" key={id}>
        {image && <img className="episode-image" src={image.medium} alt={name} />}
        <div className="episode-info">
            <p className="episode-number">Season {season}, Episode {number}</p>
            <h3>{name}</h3>
            {summary && parse(summary)}
            <div className="flex-spacer" />
            <p className="episode-runtime">{runtime} minutes</p>
        </div>
    </div>)
}

export default Episode;
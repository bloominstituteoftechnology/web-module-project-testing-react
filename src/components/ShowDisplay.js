import React from 'react';
import Episodes from "./Episodes";

const ShowDisplay = (props) => {
    const { handleSelect, selectedSeason, show } = props;
    const {image, name, summary, seasons} = show;

    console.log(image.original);

    return(<div>
        

        <h1>{name}</h1>
        <p>{summary}</p>

        <select onChange={handleSelect} name="seasons" id="seasons">
          <option>Select A Season</option>
          {
            seasons.map(season=>{
              return(<option key={season.id} value={season.id}>{season.name}</option>);
            })
          }
        </select>

        {
            selectedSeason &&  <Episodes episodes={seasons[selectedSeason].episodes} />
        }
    </div>);
}

export default ShowDisplay;
import React from 'react';
import Episodes from "./Episodes";

const Show = (props) => {
    const { handleSelect, selectedSeason, show } = props;
    const {image, name, summary, seasons} = show;

    return(<div>
        <h1>{name}</h1>
        <p>{summary}</p>

        <select onChange={handleSelect} name="seasons" id="seasons">
          <option>Select A Season</option>
          {
            seasons.map(season=>{
              return(<option data-testId="season-option" key={season.id} value={season.id}>{season.name}</option>);
            })
          }
        </select>

        {
            (selectedSeason !== "Select A Season") && <Episodes episodes={seasons[selectedSeason].episodes} />
        }
    </div>);
}

export default Show;
import axios from 'axios';

const formatSeasons = (allEpisodes) => {
  const seasons = [
    {id:0, name: "Season 1", episodes: []}, 
    {id:1, name: "Season 2", episodes: []}, 
    {id:2, name: "Season 3", episodes: []}, 
    {id:3, name: "Season 4", episodes: []}
  ];

  allEpisodes.forEach((episode) => {
    seasons[episode.season-1].episodes.push(episode);
  });

  return seasons;
};


const fetchShow = () => {
  return axios
    .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
    .then(res => {
      const { data } = res;
      
      return {
        name: data.name,
        image: data.image,
        summary: "A love letter to the '80s classics that captivated a generation, Stranger Things is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.",
        seasons: formatSeasons(data._embedded.episodes)
      };
    });
};

export default fetchShow;
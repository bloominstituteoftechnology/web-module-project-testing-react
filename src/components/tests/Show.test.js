import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

const selectedSeason = "Season 1"
const testShow = {
    name: "Stranger Thinks",
    summary: "Strange... very strange.",
    seasons: [
        {
            id: 1,
            name: "Season 1",
            episodes: [
                {
                    airdate: "2016-07-15",
                    airstamp: "2016-07-15T12:00:00+00:00",
                    airtime: "",
                    id: 553946,
                    image: "https://static.tvmaze.com/uploads/images/medium_landscape/342/855786.jpg",
                    name: "Chapter One: The Vanishing of Will Byers",
                    number: 1,
                    runtime: 49,
                    season: 1,
                    summary: "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.",
                    type: "regular",
                    url: "https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers"
                }
            ]
        }
    ]
}

test('renders testShow and no selected Season without errors', ()=>{
    console.log(testShow.seasons[0].episodes);
    render(<Show show={testShow} episodes={testShow.seasons['Season 1'].episodes} />);
});

test('renders Loading component when prop show is null', () => {
});

test('renders same number of options seasons are passed in', ()=>{
});

test('handleSelect is called when an season is selected', () => {
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
});

//Tasks:
//1. Build an example data structure that contains the show data in the correct format. A show should contain a name, a summary and an array of seasons, each with a id, name and (empty) list of episodes within them. Use console.logs within the client code if you need to to verify the structure of show data.
//2. Test that the Show component renders when your test data is passed in through show and "none" is passed in through selectedSeason.
//3. Test that the Loading component displays when null is passed into the show prop (look at the Loading component to see how to test for it's existance)
//4. Test that when your test data is passed through the show prop, the same number of season select options appears as there are seasons in your test data.
//5. Test that when an item is selected, the handleSelect function is called. Look at your code to see how to get access to the select Dom element and userEvent reference materials to see how to trigger a selection.
//6. Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render the episode component when the selectedSeason prop has a valid season index.
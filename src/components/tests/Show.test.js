import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

const testShow = {
    //add in approprate test data structure here.
    name: "Test Show",
    image: {
        medium: "https://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
        original: "https://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"
        },
    summary: "Test Summary blah blah blah",
    seasons: [
        {id:0, name: "Test Season 1", episodes: []}, 
        {id:1, name: "Tet Season 2", episodes: []}, 
        {id:2, name: "Test Season 3", episodes: []}, 
        {id:3, name: "Test Season 4", episodes: [{
            id:3,
            image: null,
            name: "",
            number:3,
            runtime: 3,
            season: 3,
            summary: "Text to test if passed or not" 
        }]}],
}
//1. Build an example data structure that contains the show data in the correct format. A show should contain a name, a summary and an array of seasons, each with a id, name and (empty) list of episodes within them. Use console.logs within the client code if you need to to verify the structure of show data.
//NOTE NOTE NOTE I had to console.log('FETSH SHOW DATA',data); on line 29 of fetchShow.js to get the proper structure. I started by mimicking the format from lines 24-37 of fetchShow.js and expanding that to inclue the data I found on the console.log
test('renders testShow and no selected Season without errors', ()=>{
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

//2. Test that the Show component renders when your test data is passed in through show and "none" is passed in through selectedSeason.
//3. Test that the Loading component displays when null is passed into the show prop (look at the Loading component to see how to test for it's existance)
//4. Test that when your test data is passed through the show prop, the same number of season select options appears as there are seasons in your test data.
//5. Test that when an item is selected, the handleSelect function is called. Look at your code to see how to get access to the select Dom element and userEvent reference materials to see how to trigger a selection.
//6. Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render the episode component when the selectedSeason prop has a valid season index.
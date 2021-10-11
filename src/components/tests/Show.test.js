import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

const testShow = {
    //add in approprate test data structure here.
    name: "Test Series",
    summary: "A test summary",
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
    },
    seasons: [
      {
        id: 0,
        name: "Test 1",
        episodes: [],
      },
      {
        id: 1,
        name: "Test 2",
        episodes: [],
      },
      {
        id: 2,
        name: "Test 3",
        episodes: [],
      },
      {
        id: 3,
        name: "Test 4",
        episodes: [],
      },
    ],
}

test('renders testShow and no selected Season without errors', ()=>{
    render(<Show show={testShow} selectedSeason={"none"} />)
});

test('renders Loading component when prop show is null', () => {
    const name = screen.queryByText(/test series/i);
  const summary = screen.queryByText(/a test summary/i);
});

test('renders same number of options seasons are passed in', ()=>{
//     expect(name).toBeInTheDocument();
//   expect(summary).toBeInTheDocument();
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
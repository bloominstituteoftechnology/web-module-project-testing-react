import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';
import Episode from '../Episode';
import Loading from '../Loading';

const testShow = {
    //add in appropriate test data structure here.
    name: "Stranger Things",
    img: "../../../public/stranger_things.png",
    summary: "Movie summary: After the mysterious and sudden vanishing of a young boy, the people of a small town begin to uncover secrets of a government lab, portals to another world and sinister monsters. The boy's mother (Joyce) desperately tries to find him, convinced he is in grave danger, while the police chief searches for answers",
    seasons: [
        // season 1
        {   id: 0,
            name: "Season 1",
            episodes: []
        },

        // season 2
        {   id: 1,
            name: "Season 2",
            episodes: []
        },

        // season 3
        {   id: 2,
            name: "Season 3",
            episodes: []
        },

        // season 4 
        {   id: 3,
            name: "Season 4",
            episodes: []
        }
    ]
}

test('renders testShow and no selected Season without errors', ()=>{
    render( <Show testShow = { testShow } selectedSeason = { "none" }/>);
});

test('renders Loading component when prop show is null', () => {
    render( <Show show = { null } />);

    const loading = screen.queryByTestId("loading-container");

    expect(loading).toBeInTheDocument();
});

test('renders same number of options seasons are passed in', ()=>{
    render( <Show show = { testShow } />);

    const seasonsOpt = testShow.seasons;

    expect(seasonsOpt).toHaveLength(4);
});

test('handleSelect is called when an season is selected', () => {
    const handleSelect = jest.fn();
    render( <Show show = { testShow } selectedSeason = { "none" } handleSelect = { handleSelect }/>);

    const option = screen.getByLabelText( /Select A Season /i);

    userEvent.selectOptions(option, ["3"]);

    expect(handleSelect).toBeCalled();
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    const { rerender } = render( <Show testShow = { testShow } selectedSeason = { "none" }/>);

    const episodes = screen.queryAllByTestId("episodes-container");

    expect(episodes).toBeFalsy();

    rerender( <Show testShow = { testShow } selectedSeason = { 1 } />);
    episodes = screen.queryByTestId("episodes-container");

    expect(episodes).toBeTruthy();
});

//Tasks:
//1. Build an example data structure that contains the show data in the correct format. A show should contain a name, a summary and an array of seasons, each with a id, name and (empty) list of episodes within them. Use console.logs within the client code if you need to to verify the structure of show data.
//2. Test that the Show component renders when your test data is passed in through show and "none" is passed in through selectedSeason.
//3. Test that the Loading component displays when null is passed into the show prop (look at the Loading component to see how to test for it's existance)
//4. Test that when your test data is passed through the show prop, the same number of season select options appears as there are seasons in your test data.
//5. Test that when an item is selected, the handleSelect function is called. Look at your code to see how to get access to the select Dom element and userEvent reference materials to see how to trigger a selection.
//6. Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render the episode component when the selectedSeason prop has a valid season index.
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

const testShow = {
    //add in approprate test data structure here.
    handleSelect: jest.fn(),
    show: {
        name: "Bobby",
        summary: "Welcome to Bobby's World",
        seasons: [{
            id: 1,
            name: "Bobby Life",
            episodes: [{
                id: 1,
                name: "",
                image: null,
                season: 1,
                number: 1,
                summary: "without image",
                runtime: 1
            }]
        }]
    },
    selectedSeason: 0,

}

test('renders testShow and no selected Season without errors', ()=>{
    render(<Show handleSelect={testShow.handleSelect} selectedSeason={"none"} show={testShow.show} />);
});

test('renders Loading component when prop show is null', () => {
    render(<Show handleSelect={testShow.handleSelect} selectedSeason={"none"} show={null} />);

    const loading = screen.getByTestId("loading-container");
    expect(loading).toBeInTheDocument();
});

test('renders same number of options seasons are passed in', ()=>{
    render(<Show handleSelect={testShow.handleSelect} selectedSeason={0} show={testShow.show} />);

    const seasons = screen.getAllByTestId("season-option");
    expect(seasons.length).toBe(testShow.show.seasons.length);
});

test('handleSelect is called when an season is selected', () => {
    const mock = new testShow.handleSelect()
    render(<Show handleSelect={mock} selectedSeason={"none"} show={testShow.show} />);

    const select = screen.getByRole("combobox");
    userEvent.selectOptions(select, 1)
    expect(testShow.handleSelect.mock.calls.length).toBe(1)
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    const mock = new testShow.handleSelect()
    const {rerender} = render(<Show handleSelect={mock} selectedSeason={"none"} show={testShow.show} />);
    rerender(<Show handleSelect={mock} selectedSeason={0} show={testShow.show} />)
    
});

//Tasks:
//1. Build an example data structure that contains the show data in the correct format. A show should contain a name, a summary and an array of seasons, each with a id, name and (empty) list of episodes within them. Use console.logs within the client code if you need to to verify the structure of show data.
//2. Test that the Show component renders when your test data is passed in through show and "none" is passed in through selectedSeason.
//3. Test that the Loading component displays when null is passed into the show prop (look at the Loading component to see how to test for it's existance)
//4. Test that when your test data is passed through the show prop, the same number of season select options appears as there are seasons in your test data.
//5. Test that when an item is selected, the handleSelect function is called. Look at your code to see how to get access to the select Dom element and userEvent reference materials to see how to trigger a selection.
//6. Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render the episode component when the selectedSeason prop has a valid season index.
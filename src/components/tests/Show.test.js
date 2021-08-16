import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

const testShow = {
    name: "stuff",
    sumarry: "sumarry",
    seasons: [
        {
            id: "1", 
            name: "name",
            episodes: []
        }
    ]
    //add in approprate test data structure here.
}

test('renders testShow and no selected Season without errors', ()=>{
    const mockFunction = jest.fn()
    render(<Show 
        show={testShow} 
        handleSelect={mockFunction} 
        selectedSeason="none"
    />)
});

test('renders Loading component when prop show is null', () => {
    const mockFunction = jest.fn()
    render(<Show 
        show={null} 
        handleSelect={mockFunction} 
        selectedSeason="none"
    />)
    const loader = screen.getByTestId("loading-container")
    expect(loader).toBeInTheDocument()
});

test('renders same number of options seasons are passed in', ()=>{
    const mockFunction = jest.fn()
    render(<Show 
        show={testShow} 
        handleSelect={mockFunction} 
        selectedSeason="none"
    />)
    const options = screen.getAllByTestId("season-option")
    expect(options).toHaveLength(testShow.seasons.length)
});

test('handleSelect is called when an season is selected', () => {
    const mockFunction = jest.fn()
    const { getByTestId, getAllByTestId } = render(<Show 
        show={testShow} 
        handleSelect={mockFunction} 
        selectedSeason="none"
    />)
    const select = getByTestId("select")
    userEvent.selectOptions(select, ["1"])
    expect(mockFunction.mock.calls).toHaveLength(1)
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    const mockFunction = jest.fn()
    const { queryByTestId, rerender } = render(<Show 
        show={testShow} 
        handleSelect={mockFunction} 
        selectedSeason="none"
    />)
    const seasons = queryByTestId("episodes-container")
    expect(seasons).not.toBeInTheDocument()
    rerender(<Show 
        show={testShow} 
        handleSelect={mockFunction} 
        selectedSeason={0}
    />)
    const seasons2 = queryByTestId("episodes-container")
    expect(seasons2).toBeInTheDocument()
});

//Tasks:
//1. Build an example data structure that contains the show data in the correct format. A show should contain a name, a summary and an array of seasons, each with a id, name and (empty) list of episodes within them. Use console.logs within the client code if you need to to verify the structure of show data.
//2. Test that the Show component renders when your test data is passed in through show and "none" is passed in through selectedSeason.
//3. Test that the Loading component displays when null is passed into the show prop (look at the Loading component to see how to test for it's existance)
//4. Test that when your test data is passed through the show prop, the same number of season select options appears as there are seasons in your test data.
//5. Test that when an item is selected, the handleSelect function is called. Look at your code to see how to get access to the select Dom element and userEvent reference materials to see how to trigger a selection.
//6. Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render the episode component when the selectedSeason prop has a valid season index.
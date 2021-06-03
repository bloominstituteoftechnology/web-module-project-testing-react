import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

const testShow = {
    name: " Stanger Things",
    summary: "summary",
    seasons: [
        { id: "1", name: "Season 1", episode: [] },
        { id: "2", name: "Season 2", episodes: [] },
        { id: "3", name: "Season 3", episodes: [] },
        { id: "4", name: "Season 4", episodes: [] }
    ],
};

test('renders testShow and no selected Season without errors', () => {
    render(<Show show={testShow} selectedSeason={"none"} />)
});

test('renders Loading component when prop show is null', () => {
    render(<Show show={null} selectedSeason={"none"} />)
    const loading = screen.queryByText(/Fetching data.../i)
    expect(loading).toBeInTheDocument()
});

test('renders same number of options seasons are passed in', () => {
    render(<Show show={testShow} selectedSeason={"none"} />);
    const seasons = screen.queryAllByTestId(/season-option/i);
    expect(seasons.length).toBe(4);
});

test("component renders when no seasons are selected and when rerenders with a season passed in", () => {
    const mockSeason = jest.fn();

    const { rerender } = render(<Show handleSelect={mockSeason} show={testShow} selectedSeason={'none'} />)
    let episodes = screen.queryByTestId('episodes-container')
    expect(episodes).not.toBeInTheDocument();

    rerender(<Show handleSelect={mockSeason} show={testShow} selectedSeason={1} />)
    episodes = screen.queryByTestId('episodes-container')
    expect(episodes).toBeInTheDocument();

});

test("component renders when no seasons are selected and when rerenders with a season passed in", () => {
    const mockSeason = jest.fn();

    const { rerender } = render(<Show handleSelect={mockSeason} show={testShow} selectedSeason={'none'} />)
    let episodes = screen.queryByTestId('episodes-container')
    expect(episodes).not.toBeInTheDocument();

    rerender(<Show handleSelect={mockSeason} show={testShow} selectedSeason={1} />)
    episodes = screen.queryByTestId('episodes-container')
    expect(episodes).toBeInTheDocument();

});

//Tasks:
//1. Build an example data structure that contains the show data in the correct format. A show should contain a name, a summary and an array of seasons, each with a id, name and (empty) list of episodes within them. Use console.logs within the client code if you need to to verify the structure of show data.
//2. Test that the Show component renders when your test data is passed in through show and "none" is passed in through selectedSeason.
//3. Test that the Loading component displays when null is passed into the show prop (look at the Loading component to see how to test for it's existance)
//4. Test that when your test data is passed through the show prop, the same number of season select options appears as there are seasons in your test data.
//5. Test that when an item is selected, the handleSelect function is called. Look at your code to see how to get access to the select Dom element and userEvent reference materials to see how to trigger a selection.
//6. Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render the episode component when the selectedSeason prop has a valid season index.
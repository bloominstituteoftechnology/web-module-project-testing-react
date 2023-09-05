import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';

const show = {
    name: "test-name",
    image: "test-img",
    summary: "test-summary",
    seasons: [
        { id: 0, name: "Season 1", episodes: [] },
        { id: 1, name: "Season 2", episodes: [] },
        { id: 2, name: "Season 3", episodes: [] },
        { id: 3, name: "Season 4", episodes: [] },
        { id: 4, name: "Season 5", episodes: [] },
    ]
}


test('renders without errors', () => {
    render(<Show show={show} selectedSeason={"none"} />)
});


test('renders Loading component when prop show is null', () => {
    render(<Show show={null} selectedSeason={"none"} />)
    const loadText = screen.queryByTestId(/loading-container/i);
    expect(loadText).toBeInTheDocument();
});

test('renders same number of options seasons are passed in', () => {
    render(<Show show={show} selectedSeason={"none"} />);
    const showOptions = screen.queryAllByTestId(/season-option/i);
    expect(showOptions).toHaveLength(5);
});

test('handleSelect is called when an season is selected', async () => {
    const handleSelect = jest.fn();
    render(<Show show={show} selectedSeason={"none"} handleSelect={handleSelect} />);
    const select = screen.getByLabelText(/Select A Season/i);
    await userEvent.setup().selectOptions(select, ["1"]);

    expect(handleSelect).toBeCalled();
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    const { rerender } = render(<Show show={show} selectedSeason={"none"}/>);
    let episodes = screen.queryByTestId("episodes-container")
    expect(episodes).not.toBeInTheDocument();

    rerender(<Show show={show} selectedSeason={1}/>)
    episodes = screen.queryByTestId("episodes-container")
    expect(episodes).toBeInTheDocument();
});

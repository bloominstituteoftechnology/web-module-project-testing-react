import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

const testShow = {
    name: "test name",
    summary: "test summary",
    seasons:[
        {
            id: 0,
            name: "season 1",
            episodes:[]
        },
        {
            id: 1,
            name: "season 2",
            episodes:[]
        }
    ],
}

test('renders without errors', ()=>{
    render(<Show show={testShow} selectedSeason={"none"}/>);
});

test('renders Loading component when prop show is null', () => {
    render(<Show show={null} />);
    const loading = screen.queryByTestId("loading-container");
    expect(loading).toBeInTheDocument();
});


test('renders same number of options seasons are passed in', ()=>{
    render(<Show show={testShow} selectedSeason={"none"}/>);
    const seasonOptions = screen.queryAllByTestId('season-option');
    expect(seasonOptions).toHaveLength(2);
    expect(seasonOptions.length).toEqual(2);
});

test('handleSelect is called when an season is selected', () => {
    const handleSelect = jest.fn();
    render(<Show show={testShow} handleSelect={handleSelect} selectedSeason={"none"}/>);
    const select = screen.queryByLabelText("Select A Season");
    userEvent.selectOptions(select, ['1']);
    expect(handleSelect.mock.calls).toHaveLength(1);
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    const {rerender} = render(<Show show={testShow} selectedSeason={"none"}/>);
    let episodesContainer = screen.queryByTestId("episodes-container");
    expect(episodesContainer).not.toBeInTheDocument();

    rerender(<Show show={testShow} selectedSeason={1}/>)
    episodesContainer = screen.queryByTestId("episodes-container");
    expect(episodesContainer).toBeInTheDocument();
});
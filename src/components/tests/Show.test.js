import React from 'react';
import { render, screen, rerender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Episodes from'./../Episodes';
import Show from './../Show';

const testShow = {
    name: 'test show',
    summary: 'great show',
    seasons: [{id:0, name: 'Season 1', episodes: []}, {id: 1, name: 'Season 2', episodes: []}, {id: 2, name: 'Season 3', episodes: []}]
}

test('renders testShow and no selected Season without errors', ()=>{
    render(<Show show={testShow} selectedSeason={'none'} />)
    const test = screen.queryByText(/test show/i)
    expect(test).toHaveTextContent(/test show/i)
});

test('renders Loading component when prop show is null', () => {
    render(<Show show={null} />)
    const loading = screen.queryByText(/Fetching data.../i)
    expect(loading).toHaveTextContent(/Fetching data.../i)
});

test('renders same number of options seasons are passed in', ()=>{
    render(<Show show={testShow} selectedSeason={'none'} />)
    const options = screen.getAllByTestId('season-option')
    expect(options).toHaveLength(3)
});

test('handleSelect is called when an season is selected', () => {
    render(<Show show={testShow} selectedSeason={testShow.seasons[1]} />)
    userEvent.selectOptions(screen.get('select'), ['1'])
    expect(screen.getByRole('option', {name: 'Season 2'}).selected).toBe(true)
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    const {rerender} = render(<Show show={testShow} selectedSeason={'none'} />)
    let episodes = screen.getAllByTestId('season-option')
    expect(episodes).not.toBeInTheDocument()
    rerender(<Show show={testShow} selectedSeason={1} />)
    episodes = screen.getAllByTestId('season-option')
    expect(episodes).toBeInTheDocument()
});

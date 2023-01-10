import React from 'react';
import { render, fireEvent, screen, rerenders } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';
const showData = {
    name: 'Looney Tunes',
    summary: 'A goofy cartoon with goofy characters',
    seasons: [
        {
            id: 0,
            name: 'the good season',
            episodes: []
        },
        {
            id: 1,
            name: 'the bad season',
            episodes: []
        }
    ]
}

test('renders without errors', () => { render(<Show show={showData} selectedSeason={'none'}/>)});

test('renders Loading component when prop show is null', () => {
    render(<Show show={showData} selectedSeason={'none'}/>)
    expect(screen.getByTestId('loading-cotainer')).toBeInTheDocument()});

test('renders same number of options seasons are passed in', () => {
    render( <Show show={showData} selectedSeason={'none'}/>)
    const showOptions = screen.quaryAllByTestId('season-option')
    expect(showOptions).tohavelength(2);
 });

test('handleSelect is called when an season is selected', () => {
    const handleSelect = jest.fn()
    render(<Show show={showData} selectedSeason={'none'} handleSelect={handleSelect}/>);
    const Select = screen.getBylabelText(/select a season/i)
    fireEvent.change(select, {target: {value: 1}})
    expect(handleSelect).toBeCalled()
 });

test('component renders when no seasons are selected and when rerenders with a season passed in', () => { 
    render(<Show show={showData} episodes={'none'} handleSelect={handleSelect}/>)
    let episodes = screen.quaryAllByTestId('episodes-container')
    expect(episodes).not.toBeInTheDocument();
    rerenders(<Show show={showData} selectedSeason={0}/>)
    episodes = screen.quaryByTestId('episodes-container');
    expect(episodes).toBeInTheDocument()
});

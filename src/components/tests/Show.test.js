import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';
import Episodes from './../Episodes'

const show = {
    name: 'YEEHAWW',
    summary: 'im a cowboyyy',
    seasons: [
        {
            id: 1,
            name: 'season 1',
            episodes: []
        },
        {
            id: 2,
            name: 'season 2',
            episodes: []
        }
    ]
}

test('renders without errors', () => {
    render(<Show show={show} selectedSeason="none" />)
});

test('renders Loading component when prop show is null', () => {
    render(<Show show={null} />)
    expect(screen.getByText(/Fetching data.../i)).toBeInTheDocument()
});

test('renders same number of options seasons are passed in', () => {
    render(<Show show={show} selectedSeason="none" />)
    expect(screen.getAllByTestId('season-option')).toHaveLength(2)
});

test('handleSelect is called when a season is selected', async () => {
    const spy = jest.fn()
    render(<Show show={show} selectedSeason="none" handleSelect={spy} />)
    const select = screen.getByLabelText(/Select a Season/i)
    fireEvent.change(select, { value: 1 })
    expect(spy).toBeCalled()
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
   const { rerender } = render(<Show show = {show} selectedSeason="none"/>)
    expect(screen.queryByText(/Chapter One/i)).not.toBeInTheDocument()

    rerender(<Show show={show} selectedSeason = {1}/>)
    expect(screen.getByTestId('episodes-container')).toBeInTheDocument()
});

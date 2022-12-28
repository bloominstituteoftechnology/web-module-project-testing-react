import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './../Display';

import mockFetchShow from '../../api/fetchShow'
jest.mock('../../api/fetchShow');

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


test('renders without errors with no props', async () => {
    render(<Display />)
});

test('renders Show component when the button is clicked ', async () => {
    mockFetchShow.mockResolvedValueOnce(showData);
    render(<Display />)
    const button = screen.getByRole('button');
    fireEvent.click(button);

    const show = await screen.findByTestId('show-container');
    expect(show).toBeInTheDocument();



});

test('renders show season options matching your data when the button is clicked', async () => {
    mockFetchShow.mockResolvedValueOnce(showData);
    render(<Display />)
    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
        const seasonOptions = screen.queryAllByTestId('season-option');
        expect(seasonOptions).toHaveLength(2);

    })

});

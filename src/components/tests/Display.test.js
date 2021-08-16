import React from 'react';
import { waitFor, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Display from '../Display';
import fetchShow  from '../../api/fetchShow';
jest.mock('../../api/fetchShow');

const testShow = {
    name: "show",
    summary: "summary",
    seasons: [
        {
            id: 1,
            name: "Chapter 1",
            episodes: [],
        },

        {
            id: 2,
            name: "Chapter 2",
            episodes: [],
        },

        {
            id: 3,
            name: "Chapter 3",
            episodes: [],
        },
    ], 
}

test('display component renders without any errors', () => {
    render(<Display />)
})

test('fetch is pressed, the show component displays', async () => {
    render(<Display />);

    fetchShow.mockResolvedValueOnce(testShow);

    const button = screen.getByRole('button'); 
    userEvent.click(button);

    const showDetails = await screen.findByTestId("show-container");
    expect(showDetails).toBeInTheDocument();
})

test('fetch is pressed, the amount of select options rendered is equal to the amount of seasons in your test data', async () => {
    render(<Display />);

    fetchShow.mockResolvedValueOnce(testShow);

    const button = screen.getByRole('button');
    userEvent.click(button);

    const seasons = await screen.findAllByTestId("season-option");
    const seasonsLength = testShow.seasons.length;

    expect(seasons).toHaveLength(seasonsLength);
})

test('fetch is pressed, the display function is called', async () => {
    const mockDisplayFunc = jest.fn();

    render(<Display displayFunc = {mockDisplayFunc} />)

    fetchShow.mockResolvedValueOnce(testShow);

    const button = screen.getByRole('button');

    userEvent.click(button)

    await waitFor(() => expect(mockDisplayFunc).toHaveBeenCalled());
})


///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
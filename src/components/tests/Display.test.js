import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Display from "./../Display";
import userEvent from "@testing-library/user-event";

import fetchShow from "../../api/fetchShow";
jest.mock("./../../api/fetchShow");

const testFetchShow = {
    name: '',
    summary: '',
    seasons: [
        {id: 1, name: 'Season1', episodes: []},
        {id: 2, name: 'Season2', episodes: []},
        {id: 3, name: 'Season3', episodes: []},
    ]
};

test('renders without errors', () => {
    render(<Display />);
});

test('renders a show component when button is clicked', async () => {
    fetchShow.mockResolvedValueOnce(testFetchShow);
    render(<Display />);
    const show = screen.queryByTestId('show-container');
        waitFor(() => expect(show).toBeInTheDocument());
    const button = screen.getByRole('button');
        userEvent.click(button);
});

test('renders a test season option to match fetch returns upon button being clicked', async () => {
    fetchShow.mockResolvedValueOnce(testFetchShow);
    render(<Display />);
    const button = screen.getByRole('button');
        userEvent.click(button);
    await waitFor(() => {
        const seasonOptions = screen.queryAllByTestId('season-option');
            expect(seasonOptions).toHaveLength(testFetchShow.seasons.length)
    });
})

test('test if display function is being called when the fetch button is clicked', async () => {
    fetchShow.mockResolvedValueOnce(testFetchShow);
    const mockDisplayFunc = jest.fn();
    render(<Display DisplayFunc={mockDisplayFunc} />);
    const button = screen.getByRole('button');
        userEvent.click(button);
    await waitFor(() => {
        expect(mockDisplayFunc).toHaveBeenCalledTimes(1)
    });
});




///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
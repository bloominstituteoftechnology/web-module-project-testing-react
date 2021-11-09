import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Display from "../Display";
import userEvent from "@testing-library/user-event";

import fetchShow from "../../api/fetchShow";
jest.mock('./../../api/fetchShow');

const testFetchShow = {
    name: 'name',
    summary: '',
    seasons: [
        {
            id: '0',
            name: 'season 1',
            episodes: []
        },
        {
            id: '1',
            name: 'season 2',
            episodes: []
        },
        {
            id: '2',
            name: 'season 3',
            episodes: []
        },
        {
            id: '3',
            name: 'season 4',
            episodes: []
        }
    ]

}

test("renders without errors", () => {
    render(<Display/>)
});

test("when button is pressed, the show component displays", async () => {
    fetchShow.mockResolvedValueOnce(testFetchShow);

    render(<Display/>)

    const button = screen.getByRole("button");
    userEvent.click(button);

    const show = await screen.findByTestId('show-container')

    expect(show).toBeInTheDocument();
});

test("when button is pressed, season options rendered matches fetch returns", async () => {
    fetchShow.mockResolvedValueOnce(testFetchShow);

    render(<Display/>)

    const button = screen.getByRole("button");
    userEvent.click(button);

    await waitFor(() => {
        const seasons = screen.queryAllByTestId('season-option');

        expect(seasons).toHaveLength(4);
    });
});
test("when button is pressed, displayFunc is called", async () => {
    fetchShow.mockResolvedValueOnce(testFetchShow);

    const displayFunc = jest.fn();

    render(<Display displayFunc={displayFunc}/>)

    const button = screen.getByRole("button");
    userEvent.click(button);

    await waitFor(() => {
        expect(displayFunc).toHaveBeenCalled()
    });
});














///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
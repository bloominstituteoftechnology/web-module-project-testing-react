import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Display from './../Display'

import mockFetchShow from './../../api/fetchShow'
jest.mock('./../../api/fetchShow')

const testShow = {
    //add in approprate test data structure here.
    name: "test show",
    summary: "test summary",
    seasons: [
        {
            id: 0,
            name: "season 1",
            episode: []
        },
        {
            id: 1,
            name: "season 2",
            episodes: []
        }
    ]
}

test ("render without errors", () => {
    render (<Display />);
})

test ("renders Show component when the button is click", async () => {
    mockFetchShow.mockResolvedValueOnce(testShow);

    render (<Display />);
    const button = screen.queryByRole("button");
    userEvent.click(button);

    const show = await screen.findByTestId("show-container");
    expect(show).toBeInTheDocument();
})

test ("render season options matching fetch return when button is clicked", async () => {
    mockFetchShow.mockResolvedValueOnce(testShow);
    
    render (<Display />);
    const button = screen.queryByRole("button");
    userEvent.click(button);

    await waitFor(() => {
        const seasonOptions = screen.queryAllByTestId("season-option");
        // console.log('seasonOptions: ', seasonOptions);
        expect(seasonOptions).toHaveLength(2);
    });
})

test ("displayFunc is called when the button is pressed", async () => {
    mockFetchShow.mockResolvedValueOnce(testShow);
    const displayFunc = jest.fn();

    render (<Display displayFunc = {displayFunc} />);
    const button = screen.queryByRole("button");
    userEvent.click(button);

    await waitFor(() => {
        expect(displayFunc).toHaveBeenCalled();
    });

})




///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
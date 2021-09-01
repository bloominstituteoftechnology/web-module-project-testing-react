import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Display from '../Display'

const testShow = {
    name: "Greatest Show",
    summary: "Best greatest show ever!",
    seasons: [
        {id:0, name: " ", episodes:[]},
    ]
}

test("renders without error", () => {
    render(<Display />);
});

test("render component when button is clicked", async () => {
    render(<Display show={testShow} />);
    const show = screen.queryByTestId("show-container");
    await waitFor(() => expect(show).toBeInTheDocument());
    const button = screen.getByRole("button");
    userEvent.click(button);
    })

test('test to have correct number of seasons', () => {
    render(<Display show={testShow} />);
    const button = screen.queryByTestId("show-container");
    userEvent.click(button);
    waitFor(() => expect(screen.getAllByTestId('season-option')).toHaveLength(testShow.seasons.length));
})

const testClick = jest.fn()

test('test if optional function is being called',async () => {
    render(<Display handleClick={testClick} />)
    const button = screen.getByRole('button')
    userEvent.click(button)
    await waitFor(() => expect(testClick).toHaveBeenCalledTimes(1))
})










///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
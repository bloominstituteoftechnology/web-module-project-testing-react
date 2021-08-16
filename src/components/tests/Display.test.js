//Imports
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Display from '../Display'

//testshow function with test data
const testShow = {
    name: "Greatest Show",
    summary: "Best greatest show ever!",
    seasons: [
        {id:0, name: " ", episodes:[]},
        
    ]
}

test("renders without error", () => {
    //Render the display component
    render(<Display />);
});

test("render component when button is clicked", async () => {
    //Render the display component
    render(<Display show={testShow} />);
    //Get the element with id "show-container", assign to show
    const show = screen.queryByTestId("show-container");
    //waitfor permits waiting for things that must be checked async
    //Needed to allow for the API call and change of state
    await waitFor(() => expect(show).toBeInTheDocument());
    //Get the button from display.js,
    const button = screen.getByRole("button");
    //Test click the button
    userEvent.click(button);
    })

test('test to have correct number of seasons', () => {
    //Render the display component with testShow
    render(<Display show={testShow} />);
    //Get the element with id "show-container", assign to button
    const button = screen.queryByTestId("show-container");
    //Test the click
    userEvent.click(button);
    waitFor(() => expect(screen.getAllByTestId('season-option')).toHaveLength(testShow.seasons.length));
})

const mockClick = jest.fn()

test('test if optional function is being called',async () => {
    render(<Display handleClick={mockClick} />)
    const button = screen.getByRole('button')
    userEvent.click(button)
    await waitFor(() => expect(mockClick).toHaveBeenCalledTimes(1))
})



///Tasks:
//1. Add in necessary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. 
//Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options 
//rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. 
//Test that when the fetch button is pressed, this function is called.
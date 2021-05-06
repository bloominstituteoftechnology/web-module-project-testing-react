//start with importing
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Display from './../Display';

import mockFetchShow from "../../api/fetchShow"; //grabbing API from the API file

jest.mock('../../api/fetchShow') //this stops the program from using the real API - blocks the program - uses our mock api for our testing

const testShow = {
    image: null,
    name: "show",
    seasons: [
        {
            episodes:[],
            id: 1,
            name: "season1"

        },
        {
            episodes:[],
            id: 2,
            name: "season2"

        }
    ], 
    summary: "summary"

}

test("renders Display component without errors", () => {
    render(<Display/>);
});

test('fetch button is pressed, the show component will display', async () => {
    render(<Display/>)
    mockFetchShow.mockResolvedValueOnce(testShow) //this is our fake api call now

    const button = screen.getByRole('button', /Press to Get Show Data/i ); //getByRole for buttons
    userEvent.click(button);

    const showId = await screen.findByTestId('show-container') //find you use for await
    expect(showId).toBeInTheDocument();
    expect(showId).toHaveTextContent("show"); //the name from our mock data
})

test('fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data', async () => {
    render(<Display/>)
    mockFetchShow.mockResolvedValueOnce(testShow) //this is our fake api call now

    const button = screen.getByRole('button', /Press to Get Show Data/i ); //getByRole for buttons
    userEvent.click(button);
    //Everything above it just grabbing that same button as previous test
    const seasonsOptions = await screen.findAllByTestId("season-option"); //getAll - returns an array
    expect(seasonsOptions).toHaveLength(2);
    //
})

test('when the fetch button is pressed, this function is called', async () => {
    const mockDisplayFunc = jest.fn(); 

    render(<Display displayFunc={mockDisplayFunc}/>);//This is our mock function
    mockFetchShow.mockResolvedValueOnce(testShow) //this is our fake api call now

    const button = screen.getByRole('button', /Press to Get Show Data/i ); //getByRole for buttons
    userEvent.click(button);

    await waitFor(() => expect(mockDisplayFunc).toHaveBeenCalledTimes(1)); //function is called one time upon a button click


})







///Tasks:
//1. [x]Add in nessisary imports and values to establish the testing suite.
//2. [x]Test that the Display component renders without any passed in props.
//3. [x]Rebuild or copy a show test data element as used in the previous set of tests.
//4. [x]Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. [x]Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. [] Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
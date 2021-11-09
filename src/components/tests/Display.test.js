import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Display from './../Display';
import fetchShow from '../../api/fetchShow';

const testShow = {
  
    name: "test name",
    summary: "bla bla",
    seasons:[{
        id: 123,
        name: "Season 1",
        episodes:[]
    },
    {
        id: 234,
        name: "Season 2",
        episodes:[]
    },
    {
        id: 345,
        name: "Season 3",
        episodes:[]
    }
    ]
}
test("renders without props", ()=>{
    render(<Display />);
})
test("Test that when the fetch button is pressed", async ()=>{
    fetchShow.mockResolvedValueOnce({
        data:[testShow]
    })
    render(<Display />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    const show = await screen.findAllByTestId('show-container');
    expect(show).toHaveLength(1);

})














///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
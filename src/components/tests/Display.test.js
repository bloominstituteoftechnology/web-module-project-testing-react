import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import  userEvent  from '@testing-library/user-event';
import Display from './../Display';

import  mockFetchShow  from './../../api/fetchShow';
jest.mock('./../../api/fetchShow');

const displayTest = {
    name:'Test Show',
    summary:'Summary Test',
    seasons: [
        {
            id:0,
            name:'Season 1',
            episodes:[]
        },
        {
            id:1,
            name:'Season 2',
            episodes:[]
        }
    ]

}

test("renders without errors", ()=>{
    render(<Display />)
});

test("renders works on click", async ()=>{
    mockFetchShow.mockResolvedValueOnce(displayTest)
    render(<Display />)
    const button = screen.getByRole('button')
    userEvent.click(button)
    const show = await screen.findByTestId('show-container')
    expect(show).toBeInTheDocument()
});

test('render season matching fetch return on button click', async ()=>{
    mockFetchShow.mockResolvedValueOnce(displayTest);

    render(<Display/>);
    const button = screen.getByRole('button');
    userEvent.click(button);

    await waitFor(()=>{
        const seasonOption = screen.queryAllByTestId('season-option');
        expect(seasonOption).toHaveLength(2);
    })
})


///Tasks:
//1. Add in necessary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
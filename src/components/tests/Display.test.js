import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from '../Display'

import fetchShow  from '../../api/fetchShow'
jest.mock('../../api/fetchShow');


test('render without any props', ()=>{
    render(<Display />)
})

const testDisplay = {
        name: 'ants',
        summary: 'this is a test',
        seasons: [
            {id:0, name: "Season 1", episodes: []}, 
            {id:1, name: "Season 2", episodes: []}, 
            {id:2, name: "Season 3", episodes: []}, 
            {id:3, name: "Season 4", episodes: []}
          ]
}

test('render show component when fetch button is pressed', async ()=>{
    fetchShow.mockResolvedValueOnce({
        data: [testDisplay]
    });
    render(<Display />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const show = await screen.findByTestId("show-container");
    expect(show).toHaveLength(1);
})


test('render options', async ()=>{
    fetchShow.mockResolvedValueOnce({
        data: [testDisplay]
    });
    render(<Display />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const options = await screen.getAllByTestId("season-option");
    expect(options).toHaveLength(4);
})

test('render optional prop', ()=>{
    fetchShow.mockResolvedValueOnce({
        data: [testDisplay]
    });
    const fakeGetData = jest.fn();
    render(<Display displayFunc={fakeGetData}/>);

    const button = screen.getByRole("button");
    userEvent.click(button);

    expect(fakeGetData).toBeCalled();
})










///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
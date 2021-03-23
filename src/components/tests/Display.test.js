import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Display from '../Display';
import userEvent from '@testing-library/user-event';
import fakeFetchShow from '../../api/fetchShow'

jest.mock('../../api/fetchShow')

const testShow = {
    name:'Wayne Rooney',
    summary: 'he is a former football player',
    seasons: [
    {
        id:0,
        episodes:[]  
    },
    {
        id:1,
        episodes:[] 
    },
    {
        id:2,
        episodes:[] 
    },
    ]
}

const fetchButton = () => screen.getByRole('button');

// const displayFunc = (data) => {
//     console.log(data)
// }

test('Display component renders without any passed in props', () => {
    render(<Display />)
})

test('show component displays when the fetch button is pressed', async () => {
    render(<Display />)
    fakeFetchShow.mockResolvedValueOnce(testShow)
    userEvent.click(fetchButton());
    const check = await screen.findByTestId('show-container');
    expect(check).toBeInTheDocument()
})


test('check if rendered options amount is equal to test', async () => {
    render(<Display />)
    fakeFetchShow.mockResolvedValueOnce(testShow)
    
    userEvent.click(fetchButton());
    const options = await screen.findAllByTestId('season-option');
    expect(options).toHaveLength(testShow.seasons.length);

})


test('check if fetch button is pressed, function called', async () => {
    const fireFunction = jest.fn();
    render(<Display displayFunc={fireFunction}/>)
    fakeFetchShow.mockResolvedValueOnce(testShow)
    userEvent.click(fetchButton());
    

    await waitFor(() => expect(fireFunction).toHaveBeenCalledTimes(1))

})












///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
import React from 'react';
import { render, screen } from '@testing-library/react';
import Display from '../Display';
import { testShow } from './Show.test'
import fetchShow from '../../api/fetchShow';
import userEvent from '@testing-library/user-event';
jest.mock('../../api/fetchShow');

test("renders without an error", () => {
    render(<Display/>);
})

test("press fetch button and the show component display", async () => {
    fetchShow.mockResolvedValueOnce(testShow);
    const mockFunction = jest.fn();
    render(<Display displayFunc={mockFunction}/>);
    const button = screen.getByRole("button");
    userEvent.click(button);
    const show = await screen.findByTestId('show-container');
    expect(show).toBeInTheDocument();
    const options = screen.getAllByTestId('season-option');
    expect(options).toHaveLength(3);
    expect(mockFunction).toBeCalled();
})


///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for 
//   the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount 
//   of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the 
//   fetch button is pressed, this function is called.
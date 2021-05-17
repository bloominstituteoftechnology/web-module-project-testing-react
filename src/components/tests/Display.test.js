import React from 'react';
import { findAllByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from './Display';

test("renders without error", ()=>{
    render(<Display/>);
    const seasons = screen.queryAllByTestId('season-option');
    expect(seasons).toHaveLength(3);
});


test('handleSelect is called when a season is selected', ()=>{
    const handleSelect = jest.fn();

    render(<Show show={testShow} handleSelect={handleSelect} selectedSeason='none'/>);

    const selector = screen.getByRole('combobox');
    const seasons = screen.queryAllByTestId('season-option');

    userEvent.click(selector);
    userEvent.click(seasons[1]);

    expect(handleSelect).toBeCalledTimes(1);
    expect(handleSelect.mock.calls.length === 1).toBeTruthy();
    expect(handleSelect.mock.calls.length).toBe(1);
    expect(handleSelect.mock.calls).toHaveLength(1);
});

test('component renders when no seasons are selected and when rerenders with a season passed in', ()=>{
    render(<Show show={testShow} selectedSeason="none" />);
});




///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
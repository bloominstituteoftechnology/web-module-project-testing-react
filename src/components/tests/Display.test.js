import React from 'react';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Display from '../Display';
import mockFetchShow from '../../api/fetchShow'

const testShow = {
    name: '',
    summary: '',
    seasons: [{
        id: '1',
        name: '',
        episodes: []
    }],
}

jest.mock('../../api/fetchShow')

test('renders without error', () => {
    render(<Display/>)
});

test("the show component displays when 'Get Show Data' button is clicked", async () => {
    render(<Display />);
    const button = screen.getByRole(/button/i);
    userEvent.click(button);
    expect(await screen.findByTestId(/show-container/i)).toBeInTheDocument();
});

test('when button is pressed, options rendered is equal to number of seasons', async () => {
    mockFetchShow.mockResolvedValueOnce(testShow);
    render(<Display />);
    userEvent.click(screen.getAllByText( /press to get show data/i)[0]);
    expect(await screen.findAllByTestId('season-option')).toHaveLength(1)
})



///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
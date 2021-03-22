import React from 'react'
import { screen, render } from '@testing-library/react'
import Display from '../Display'
import mockFetchShow from '../../api/fetchShow';
import userEvent from '@testing-library/user-event';
jest.mock('../../api/fetchShow')

test('Display renders without any passed in props', () => {
    render(<Display />)
})

const testShow = {
    name: 'stranger things',
    summary: 'a love letter to the 80s classics...',
    seasons: [
        { id: 0, name: 'Season 1', episodes: [
            {id: 1, name: '', image: null, season: 1, number: 1, summary: 'this is a specific summary', runtime: 1}
        ]},
        {
            id: 1,
            name: 'season 2',
            episodes: [],
        }
    ]
}

test('When get show button pressed, show component displays', async () => {
    render(<Display />)
    mockFetchShow.mockResolvedValueOnce(testShow) 

    const button = screen.queryByRole('button');
    userEvent.click(button);

    const showDetails = await screen.findByTestId("show-container")
    expect(showDetails).toBeInTheDocument();
})



///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
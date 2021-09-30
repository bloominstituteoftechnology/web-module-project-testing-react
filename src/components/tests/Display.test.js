import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import Display from '../Display';
import userEvent from '@testing-library/user-event';
import { fetchShow as mockFetchShow } from '../../api/fetchShow'

jest.mock('../../api/fetchShow')

const testShow = {
    name: 'test show name', 
    summary: 'test summary',
    seasons: [
        {
        id: '0', 
        name: 'season 1',
        episodes: []
    },
    {
        id: '1', 
        name: 'season 2',
        episodes: []
    },
    {
        id: '2', 
        name: 'season 3',
        episodes: []
    },
    ]

}


test('Display renders without any passed in props', () => {
    render(<Display />)

})

test('when the fetch button is pressed, the show component displays', async () => {
// mockFetchShow.mockResolvedValueOnce(testShow)

    const button = screen.queryByRole('button')
    userEvent.click(button)

    await waitFor(() => {
        const showContainer = screen.getByTestId('show-container')
        expect(showContainer).toBeInTheDocument()
        screen.debug()
    })
    

})

test('when the fetch button is pressed, the amount of select options rendered is equal to the amounts of seasons in your data', () => {

})


///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
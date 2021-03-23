import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Display from '../Display'

const testSeasons = [
    {
        id: 0,
        name: "Season 1",
        episodes: []
    },
    {
        id: 1,
        name: "Season 2",
        episodes: []
    },
]

const testEmptySeasons = [{}]

test('sanity check', () => {
    render(<Display />)
})

test('fetch button pressed, components show', async () => {
    render(<Display />)

    const fetchButton = screen.getByRole('button')
    userEvent.click(fetchButton)

    const showSeason = await screen.findAllByTestId('season-option')
    expect(showSeason).toBeInTheDocument
})

test('fetch button pressed showed correct amount of select options', async () => {
    render(<Display />)
})






test('optional func prop is called when fetch is pressed', () => {
    render(<Display />)
})









///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
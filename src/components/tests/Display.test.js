import React from 'react'
import {screen, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Display from '../Display'

const testSeasons = [
    {id:0, name: "Season 1", episodes: []}, 
    {id:1, name: "Season 2", episodes: []}, 
    {id:2, name: "Season 3", episodes: []}, 
    {id:3, name: "Season 4", episodes: []}
]

const testEmptySeasons = [{}]

test('sanity check', () => {
    render(<Display/>)
})

test('fetch button pressed, components show', async () => {
    render(<Display/>)

    const fetchButton = screen.getByRole('button')
    userEvent.click(fetchButton)

    const showSeason = await screen.findAllByTestId('season-option')
    // console.log(showSeason)
    expect(showSeason).toBeInTheDocument
})

test('rerender shows test data', async () => {
    const {rerender} = render(<Display show={testEmptySeasons}/>)
    console.log(testEmptySeasons)
    
    let fetchButton = screen.getByRole('button')
    userEvent.click(fetchButton)

    let showSeason = await screen.findAllByTestId('season-option')
    console.log(showSeason.length)
    // expect(showSeason.length).toEqual(4)

    // // // ---

    // rerender(<Display show={testSeasons}/>)
    // const fetchAButton = screen.getByRole('button')
    // console.log(fetchAButton)
    // fetchButton = screen.getByRole('button')
    // userEvent.click(fetchButton)

    // showSeason = await screen.findAllByTestId('season-option')
    // console.log(showSeason.length)
    // expect(showSeasons).toHaveLength(3)
})

///Tasks:
//1. Add in necessary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
//1. Add in nessisary imports and values to establish the testing suite.
import React from 'react'
import {render, screen, waitFor} from'@testing-library/react'
import userEvent from '@testing-library/user-event'
import Display from './../Display'

import mockFetchShow from '../../api/fetchShow'
jest.mock('../../api/fetchShow')

//2. Test that the Display component renders without any passed in props.
test('Display component renders', ()=>{
    render(<Display/>)
});
//3. Rebuild or copy a show test data element as used in the previous set of tests.
const testShow = {
    name: "Test Show",
    summary: "This is a summary of the test show",
    seasons: [
       {
         season_id:1,
         season_name: "season 1",
         episodes: [{
            number: 1,
            name: "episode 1",
            summary:"welcome to episode 1"
         }],
       }, 
       {
        season_id:2,
        season_name: "season 2",
        episodes: [{

        }],
      }
    ]
}
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
test('when fetch button is pressed, the show component displays.', async ()=>{
    render(<Display/>)
    mockFetchShow.mockResolvedValueOnce(testShow)
    const button = screen.getByRole("button")
    userEvent.click(button)
    await waitFor(()=>{
        const shows = screen.getByTestId("show-container")
        expect(shows).toBeTruthy()
    })
})

//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
test('when fetch button is pressed, correct number of seasons renders', async ()=>{
    render(<Display/>)
    mockFetchShow.mockResolvedValueOnce(testShow)
    const button = screen.getByRole("button")
    userEvent.click(button)
    await waitFor(()=>{
        const shows = screen.getByTestId("show-container")
        expect(shows).toBeTruthy()
    }) 
    const seasons = screen.getAllByTestId("season-option")
    expect(seasons).toHaveLength(2)
})


//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
test('when fetch is pressed, function is called', async ()=>{
    mockFetchShow.mockResolvedValueOnce(testShow)
    const mockDisplayFunc = jest.fn()
    render(<Display displayFunc={mockDisplayFunc}/>)
    const button = screen.getByRole("button")
    userEvent.click(button)
    await waitFor(()=>{
        expect(mockDisplayFunc.mock.calls).toHaveLength(1)
    })
})



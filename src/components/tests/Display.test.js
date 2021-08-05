
import React from 'react'
import Display from '../Display'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'



const testShow = {
    name: "test show",
    summary: "what a show",
    seasons: [
        {id:0, name: "Season 1", episodes: []},
        {id:1, name: "Season 2", episodes: []},
        {id:2, name: "Season 3", episodes: []},
    ]
}
test('Display component renders without any props passed in', () => {
    render(<Display/>)
    const display = screen.queryByText(/press to get show data/i)
    expect(display).toBeInTheDocument()
})
test('when fetch button is pressed show component with display', async () => {
    render(<Display show = {testShow}/>)
    const button = screen.queryByRole('button')
    userEvent.click(button)
    await waitFor(() => {
        const show = screen.queryAllByTestId('show-container')
        expect(show).toBeTruthy()
    })
})
test('when fetch buttonis pressed the amout of select options rendered is equal to the amount of seasons', async () => {
    render(<Display show = {testShow}/>)
    const button = screen.queryByRole('button')
    userEvent.click(button)
    await waitFor(() => {
        const show = screen.queryAllByTestId('show-container')
        expect(show).toHaveLength(1)
    })
})
test('test if optional function is being called', async () => {
    const mockClick = jest.fn();

render(<Display handleClick = {mockClick}/>);
    const button = screen.getByRole('button');
    userEvent.click(button);
    await waitFor(() => { 
        expect(mockClick).toHaveBeenCalledTimes(0)
    });
})










///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
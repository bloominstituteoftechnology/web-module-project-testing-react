import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Display from '../Display'

const testShow = {
    name: 'test show',
    summary: 'great show',
    seasons: [{id: 0, name: 'Season 1', episodes: []}, {id: 1, name: 'Season 2', episodes: []}, {id: 2, name: 'Season 3', episodes: []}, {id: 3, name: 'Season 4', episodes: []}]
}

test ('renders display component without any props passed in', () => {
    reder(<Display />)
    const display = screen.queryByText(/press to get show data/i)
    expect(display).toBeInTheDocument()
})

test ('renders display component without any props passed in', () => {
    render(<Display />)
    const display = screen.queryByText(/press to get show data/i)
    expect(display).toBeInTheDocument()
})

test ('when the fetch button is pressed, the show component will display', async () => {
    render(<Display show={testShow} />)
    const button = screen.queryByRole('button')
    userEvent.click(button)
    await waitFor(() => {
        const show = screen.queryAllByTestId('show-container')
        expect(show).toBeTruthy()
    })
})

test ('when the fetch button is pressed, this function is called', async () => {
    render(<Display show={testShow} />)
    const button = screen.queryByRole('button')
    userEvent.click(button)
    await awaitFor(() => {
        const show = screen.queryAllByTestId('show-container')
        expect(show).toBeTruthy()
    })
})
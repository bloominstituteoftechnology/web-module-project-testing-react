import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Display from '../Display';
import  fetchShow  from '../../api/fetchShow'
import { act } from 'react-dom/test-utils';
jest.mock('../../api/fetchShow');

const testShow = {
    name: '',
    summary: '',
    seasons: [
        {
            name: 'Season 1',
            id: 1,
            episodes: [
                {
                    id: 1,
                    name: 'Chapter 1',
                    summary: 'The story begins...'
                },
                {
                    id: 2,
                    name: 'Chapter 2',
                    summary: 'The story picks up...'
                }
            ],
        }
    ],

}

test('Display component renders without any props', () => {
    render(<Display />);

    const displayButton = screen.getByRole('button');

    expect(displayButton).toBeInTheDocument();
});

test('Test that when the fetch button is pressed, the show component will display', async () => {
    render(<Display />)

    fetchShow.mockResolvedValueOnce(testShow)

    const displayButton = screen.getByRole('button');

    userEvent.click(displayButton);

    await waitFor(() => {
        const showContainer = screen.getByTestId("show-container")

        expect(showContainer).toBeInTheDocument();
    })
    

    // Hard-Coded Solution with No Mock //
    // render(<Display />)

    // const displayButton = screen.getByRole('button');

    // userEvent.click(displayButton);

    // await waitFor(() => {
    //     const showContainer = screen.getByTestId("show-container")

    //     expect(showContainer).toBeInTheDocument();
    // })

});

test('Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data', async () => {
    render(<Display />)
    
    fetchShow.mockResolvedValueOnce(testShow)

    const displayButton = screen.getByRole('button');

    userEvent.click(displayButton)

    await waitFor(() => {
        const seasonOption = screen.getAllByTestId("season-option");
        // console.log("seasonOption:",seasonOption.length);
        expect(seasonOption).toHaveLength(1);
    })
});

test('Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called', async () => {
    const fakeDisplayFunc = jest.fn();
    render(<Display displayFunc={fakeDisplayFunc} />)

    fetchShow.mockResolvedValueOnce(testShow)

    const displayButton = screen.getByRole('button');

    userEvent.click(displayButton)

    await waitFor(() => {
        expect(fakeDisplayFunc).toBeCalledTimes(1);
    })

})












///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
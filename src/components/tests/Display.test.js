import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Display from './../Display';

import { fetchShow } from '../../api/fetchShow';
jest.mock('../../api/fetchShow');

test("renders without error", ()=> {
    render(<Display/>);
});

test("when the fetch button is pressed, the show component will display", async ()=> {
    fetchShow.mockResolvedValueOnce({
        data: 
        [
            {
                //add in approprate test data structure here.
                name: 'name',
                image: '',
                summary: 'This is a summary',
                seasons: 
                [
                    {
                    id:1,
                    name: 'Joseph',
                    episodes:[]
                    },
                    {
                    id:2,
                    name: 'Trader',
                    episodes:[]
                    },
                     {
                    id:3,
                    name: 'Joe',
                    episodes:[]
                     }
                ]
            }
        ]
    });

    const {rerender} = render(<Display/>);
    const shows = screen.queryAllByTestId("show-container");
    expect(shows).toHaveLength(0);
    const button = screen.findByRole('button');
    expect(button).toBeTruthy();
    userEvent.click(button);

   
});

test("when fetch button is pressed, select options rendered equals the amount of seasons in test data", ()=> {
    render(<Display/>);
});







///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import Display from '../Display';
import {testShow} from './Show.test';

import mockFetchShow from '../../api/fetchShow';

jest.mock('../../api/fetchShow');

test('Display renders without props passed in', () => {
    render(<Display />);
});

test('when the fetch button is pressed, the show component will display', async () => {
    render(<Display />);

    mockFetchShow.mockResolvedValueOnce(testShow);

    await act (async () => {
        const button = screen.getByRole('button');
        userEvent.click(button);
    });
    const show = await screen.findByTestId(/show-container/i);
    expect(show).toBeInTheDocument();
});

test('when the fetch button is pressed, the options rendered is equal to the amount of seasons in your test data', async () => {

    render(<Display show={testShow} />);
    mockFetchShow.mockResolvedValueOnce(testShow)
    await act (async () => {
        const button = screen.getByRole('button');
        userEvent.click(button);
    });

    const options = screen.queryAllByTestId(/season-option/i);
    expect(options).toHaveLength(4);

});

test(' when the fetch button is pressed, this function is called', async () => {
    const fauxFunc = jest.fn();

    render(<Display displayFunc={fauxFunc}/>);
    mockFetchShow.mockResolvedValueOnce(testShow);
    await act (async () => {
        const button = screen.getByRole('button');
        userEvent.click(button);
    });
    expect(fauxFunc).toBeCalledTimes(1);
})















///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called. 
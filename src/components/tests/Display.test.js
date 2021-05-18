import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from './../Display';
import Show from './../Show';

// import { fetchShow as mockFetchShow } from '../../api/fetchShow';
// jest.mock('../../api/fetchShow.js');

// const displayFunc = (data)=> {
//     console.log(data);
// };

// jest.mock(displayFunc('Function Called'));

const testShow = {
    //add in approprate test data structure here.
    name: "Stranger Things",
    seasons: [
        {
            id: 0,
            name: "Season 1",
            episodes: []
        }
    ],
    summary: "A love letter to the '80s classics that captivated a generation, Stranger Things is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl."
};

test('render component without any props', () => {
    render(<Display />);
});

test('display show component on button press', () => {
    render(<Display />);
    render(<Show show={testShow} selectedSeason={0} />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    const show = screen.getByTestId('show-container');
    expect(show).toBeInTheDocument();
});

test('display correct amount of seasons as the ones passed on the component', () => {
    render(<Display />);
    render(<Show show={testShow} selectedSeason={0} />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    const option = screen.getAllByRole('option');
    expect(option[0].value).toEqual('none');
    expect(option[1].value).toEqual('0');
    expect(option.length).toEqual(2);
});

test('function is called on button press', () => {
    const mock = jest.fn(data => console.log(data));

    render(<Display displayFun={mock} />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(mock).toHaveBeenCalledTimes(0);
});

///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
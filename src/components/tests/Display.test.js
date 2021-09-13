import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from '../Display';
import Show from './../Show';

test("renders without errors", () => {
    render(<Display />);
})
const testShow = {
    //add in approprate test data structure here.
    name:'starnge',
    image:'../../../public/stranger_things.png',
    summary: 'blablabla',
    seasons: [
        {id:0, name: "Season 1", episodes: []}, 
        {id:1, name: "Season 2", episodes: []}, 
        {id:2, name: "Season 3", episodes: []}, 
        {id:3, name: "Season 4", episodes: []}
      ]
}
test("if button is pressed the Show.js component is displayed", async() => {
    render(<Display />);

    const button = screen.getByRole('button');

    userEvent.click(button);

    expect(<Show show={testShow}/>)
})

test('if number of select items === testShow select items', () => {
    render(<Display/>);
    const button = screen.getByRole('button');
    userEvent.click(button);
    render(<Show show={testShow} selectedSeason='1'/>)
    const selectItems = screen.getByLabelText(/Select A Season/i);
    userEvent.selectOptions(selectItems, ['1']);
    const optionItems = screen.getAllByTestId('season-option')
    expect(optionItems).toHaveLength(4);
})

test("optinal fetch", () => {
    const mockDisplayFunc = jest.fn()
    render(<Display displayFun={mockDisplayFunc('DATA')}/>);
    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(mockDisplayFunc).toHaveBeenCalledTimes(1);
})






///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.

//2. Test that the Display component renders without any passed in props.

//3. Rebuild or copy a show test data element as used in the previous set of tests.

//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.

//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.

//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
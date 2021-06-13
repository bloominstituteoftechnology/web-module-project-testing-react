import React from 'react';
import { render, screen, waitfor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Display from '../Display'


const testDisplay = {
    name: "Stranger Things",
    summary:"A town in the 80's thats more than it seems.",
    seasons:[
        {id:0, name:"Season 2", episodes: []}
    ]
}
const displayFunction = (data) => {
    console.log(data);
}

test('renders without any props', () => {
    render(<Display/>)
});

test('test component showing', () => {
    render(<Display displayFunction = {displayFunction}/>)

    const show = screen.queryByTestId('show-container');
    waitfor( () => expect(show).toBeInTheDocument());
    
    const button = screen.getByRole('button');
    userEvent.click(button);
});

test('test seasons to have right # of ep',() => {
    render (<Display show = {testDisplay}/>);

    const button = screen.getByRole('button');
    userEvent.click(button);
    waitfor( () => expect(screen.getAllByTestId('season-option')).toHaveLength(testDisplay.seasons.length));
});

test('test if optional function is being called', () => {
    const mockClick = jest.fn();

render(<Display handleClick = {mockClick}/>);
    const button = screen.getByRole('button');
    userEvent.click(button);
    waitfor( () => expect(mockClick).toHaveBeenCalledTimes(1));
})
///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
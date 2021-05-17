import React from 'react'; 
import {render, creen, waitfor} from '@testing-libary/react';
import userEvent from '@testing-libary/user-event';

import Display from './../Display';

const testShow = {
    name: "Yogi Bear",
    summary:"A bear named Yogi along with his friend Boo-Boo try to steal forest visiter's picnic baskets.",
    seasons:[
        {id:0, name:"Season 1", episodes: []}
    ]
}

const displayFunc = (data) =>{
    console.log(data);
}

test('renders without props', ()=>{
    render(<Display/>)
});

test('test show component showing', ()=>{
    render(<Display displayFunc = {displayFunc}/>)

    const button = screen.getByRole('button');
    userEvent.click(button);

    const show = screen.queryByTestId('show-container');
    waitfor(()=> expect(show).toBeInTheDocument());
});

test('test operations rendered equals seasons',()=>{
    render (<Display show = {testShow}/>);

    const button = screen.getByRole('button');
    userEvent.click(button);

    waitfor(()=> expect(screen.getAllByTestId('season-option')).toHaveLength(testShow.seasons.length));
});

test('test if optional function is being called', ()=>{
    const fakeClick = jest.fn();
    render(<Display handleClick = {fakeClick}/>);

    const button = screen.getByRole('button');
    userEvent.click(button);

    waitfor(()=> expect(fakeClick).toHaveBeenCalledTimes(1));
});














///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
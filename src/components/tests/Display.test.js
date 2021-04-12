import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from "../Display";
import Show from "../Show";

const testShow = {
    //add in approprate test data structure here.
    name: "",
    summary: "",
    seasons: [
       {id: 0, name: "Season 1", episodes:[{id: 553946, url: "https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers", name: "Chapter One: The Vanishing of Will Byers", season: 1, number: 1}]}
    ],
}
test('renders display without props', ()=>{
    render(<Display/>)
});

test('renders display with props', ()=>{
    const mockGetData = data => {console.log(data)}
    render(<Display displayFunc ={mockGetData}/>)
});











///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
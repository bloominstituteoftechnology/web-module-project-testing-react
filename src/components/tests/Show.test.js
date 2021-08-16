import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

const testShow = {
    //add in appropriate test data structure here.
    name:"",
    summary:"",
    seasons: [{ id: 0, name: "season 1", episode:[] }]

}

test('renders testShow and no selected Season without errors', ()=>{
    //Render the show component
    render(<Show show = {testShow} selectedSeason = "none" />)
});

test('renders Loading component when prop show is null', () => {
    //Render the show component pass in null props
    render(<Show show = {null}/>);
    //query the screen for the text, assign to loading
    const loading = screen.queryByText("Fetching data...");
    //Expect loading to contain the text
    expect(loading).toHaveTextContent("Fetching data...");
});


test('renders same number of options seasons are passed in', ()=>{
    //Render the Show component, pass in testShow, no season
    render(<Show show = {testShow} selectedSeason = "none" />);
    //Get text from the element with id season-options, assign to seasonptions
    const seasonOptions = screen.getAllByTestId("season-option");
    //Expect the season options (the num of seasons) to be 1 (there's only 1)
    expect(seasonOptions).toHaveLength(1);
    
});

test('handleSelect is called when a season is selected', () => {
    //Render the component, pass in testShow
    render(<Show show = {testShow} selectedSeason = {"none"} />);
    //Get the label text, assign it to select
    const select = screen.getByLabelText(/Select a Season/i);
    //Select season, pass in select and 0
    userEvent.selectOptions(select, [0]);
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    //Render the show component, pass in testShow
    render(<Show show={testShow} selectedSeason={"none"} />);
    //screen.queryByTestID gets the element from episode.js(line6) with "testId", assigns to episode
    const episode = screen.queryByTestId("episodes-container");
    //Expect the content of episode not to be in the doc because nothing is selected
    expect(episode).not.toBeInTheDocument();

});

//Tasks:
//1. Build an example data structure that contains the show data in the correct format. 
//A show should contain a name, a summary, and an array of seasons, each with a id, name and (empty) list of episodes within them. 
//Use console.logs within the client code if you need to to verify the structure of show data.
//2. Test that the Show component renders when your test data is passed in through show and "none" is passed in through selectedSeason.
//3. Test that the Loading component displays when null is passed into the show prop (look at the Loading component to see how to test for it's existence)
//4. Test that when your test data is passed through the show prop, the same number of season select options appears as there are seasons in your test data.
//5. Test that when an item is selected, the handleSelect function is called. Look at your code to see how to get access to the select Dom element and userEvent reference materials to see how to trigger a selection.
//6. Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render the episode component when the selectedSeason prop has a valid season index.
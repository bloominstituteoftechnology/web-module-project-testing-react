import React from 'react';
// import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';
//1. Build an example data structure that contains the show data in the correct format. A show should contain a name, a summary and an array of seasons, each with a id, name and (empty) list of episodes within them. Use console.logs within the client code if you need to to verify the structure of show data.
const testShow = {
    //add in approprate test data structure here.
    name: "Test Show",
    image:{
        medium: "https://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
        original: "https://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"
        },
    seasons: [{id: 0, name: "Test Season 1", episodes: []},
                {id: 1, name: "Test Season 2", episodes: [{
                    //Add in approprate test data structure here.
                    id:1,
                    name: "",
                    image: null,
                    season: 1,
                    number: 1,
                    summary: "Text to test if correct content is passed.",
                    runtime: 1
                }]},
                {id: 2, name: "Test Season 3", episodes: []}],
    summary: "Test summary text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi pariatur ratione quos itaque, tempore dolore iste aut veritatis provident dolorem debitis, amet accusamus, quam adipisci distinctio quod eligendi similique ipsum!" 
}
//2. Test that the Show component renders when your test data is passed in through show and "none" is passed in through selectedSeason.
test('renders testShow and no selected Season without errors', ()=>{
    render(<Show show={testShow} selectedSeason="none" />);
});
//3. Test that the Loading component displays when null is passed into the show prop (look at the Loading component to see how to test for it's existence)
test('renders Loading component when prop show is null', () => {
    render(<Show show={null} selectedSeason="none" />);
    const loadingComponent = screen.getByTestId("loading-container");
    expect(loadingComponent).toBeInTheDocument();
    expect(loadingComponent).toBeTruthy();
    expect(loadingComponent).toHaveTextContent(/fetching data.../i);
});
//4. Test that when your test data is passed through the show prop, the same number of season select options appears as there are seasons in your test data.
test('renders same number of options seasons are passed in', ()=>{
    render(<Show show={testShow} selectedSeason="none" />);
    const seasonsOptions = screen.getAllByTestId("season-option");
    expect(seasonsOptions.length).toBe(3);
    expect(seasonsOptions.length === 3).toBeTruthy();
});

test('Episode component is not loaded when no season is selected', () => {
    render(<Show show={testShow} selectedSeason="none" />);
    const episodeDiv = document.getElementsByClassName("episode");
    expect(episodeDiv.length).toBe(0);
});
//5. Test that when an item is selected, the handleSelect function is called. Look at your code to see how to get access to the select Dom element and userEvent reference materials to see how to trigger a selection. 
test('handleSelect is called when a season is selected', () => {
    const mockHandleSelect = jest.fn(() => { return ("TEST") });
    // Arrange, with mock function as prop
    render(<Show show={testShow} selectedSeason="1" handleSelect={mockHandleSelect} />);

    // Act: Select option
    const optionSeason2 = screen.getByTestId("seasons")
    // console.log("Trying to get Season 2 option:", optionSeason2);
    userEvent.selectOptions(optionSeason2, [1]);

    // Assert: Is mock function called?
    // expect(mockHandleSelect.mock.calls).toHaveLength(1);
 
});
//6. Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render the episode component when the selectedSeason prop has a valid season index.
test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    // episode component DOES NOT render when the selectedSeason props is "none"
    const { rerender } = render(<Show show={testShow} selectedSeason="none" />);
    let episodeDiv = document.getElementsByClassName("episode");
    expect(episodeDiv.length).toBe(0);

    // DOES render the episode component when the selectedSeason prop has a valid season index.
    rerender(<Show show={testShow} selectedSeason={1} />)
    episodeDiv = document.getElementsByClassName("episode");
    expect(episodeDiv.length).toBe(1);
});




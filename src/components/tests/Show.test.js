import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Loading from '../Loading';

import Show from './../Show';

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

// console.log(testShow.seasons[0])

test('renders testShow and no selected Season without errors', ()=>{
    render(<Show show={testShow} selectedSeason='none' />);
    // const showButton = screen.queryByText(/press to get show data/i);
    // console.log(showButton)
    // expect(showButton).toBeInTheDocument();

});

test('renders Loading component when prop show is null', () => {
    render(<Show show={null} />)
    const value = screen.queryByText(/Fetching data.../i);
    expect(value).toBeInTheDocument();
});

test('renders same number of options seasons are passed in', ()=>{
    render(<Show show={testShow} selectedSeason='none' />);

    const seasonButton = screen.getByLabelText("Select A Season")

    // console.log(seasonButton);
    expect(seasonButton).toBeInTheDocument();

    userEvent.click(seasonButton);

    // expect(seasonButton.value).toHaveLength(4)

    const seasonOptions = screen.queryAllByTestId("season-option");
    expect(seasonOptions).toHaveLength(1)


});

test('handleSelect is called when an season is selected', () => {
    const fakeHandleSelect = jest.fn();

    render(<Show show={testShow} selectedSeason='none' handleSelect={fakeHandleSelect}/>);

    const seasonButton = screen.getByLabelText("Select A Season")

    userEvent.selectOptions(seasonButton, ['1'])
    
    expect(screen.getByRole("option", {name: 'Season 1'}).selected).toBe(true);
    
    expect(fakeHandleSelect).toBeCalledTimes(1);

});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    const { rerender } = render(<Show show={testShow} selectedSeason='none' />);

    let episodeOneSummary = screen.queryByText('The story begins...');
    
    expect(episodeOneSummary).not.toBeInTheDocument();

    rerender(<Show show={testShow} selectedSeason={0} />);

    episodeOneSummary = screen.queryByText('The story begins...');
    
    expect(episodeOneSummary).toBeInTheDocument();

    // const { rerender } = render(<Show show={testShow} selectedSeason='none' />);
    
    
    // const seasonButton = screen.getByLabelText("Select A Season")
    
    // userEvent.selectOptions(seasonButton, ['1'])
    
    // expect(screen.getByRole("option", {name: 'Season 1'}).selected).toBe(true);
    // rerender(<Show show={testShow} selectedSeason='Season 1' />);
    // console.log(seasonButton.value)
    
    // console.log(episodeOneSummary)
    // expect(episodeOneSummary).toBeInTheDocument();
    
    


    // let seasonObject = screen.queryAllByTestId('season-option');
    // console.log(seasonObject)

    // expect(seasonObject).toHaveLength(0); test







});

//Tasks:
//1. Build an example data structure that contains the show data in the correct format. A show should contain a name, a summary and an array of seasons, each with a id, name and (empty) list of episodes within them. Use console.logs within the client code if you need to to verify the structure of show data.
//2. Test that the Show component renders when your test data is passed in through show and "none" is passed in through selectedSeason.
//3. Test that the Loading component displays when null is passed into the show prop (look at the Loading component to see how to test for it's existance)
//4. Test that when your test data is passed through the show prop, the same number of season select options appears as there are seasons in your test data.
//5. Test that when an item is selected, the handleSelect function is called. Look at your code to see how to get access to the select Dom element and userEvent reference materials to see how to trigger a selection.
//6. Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render the episode component when the selectedSeason prop has a valid season index.
import React from 'react';
import { render, screen, getAllByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Loading from './../Loading';
import Show from './../Show';

const testShow = {
    name: 'The Office',
    summary: 'lorem ipsum...',
    seasons: [
        {
            id: 1,
            name: 'Season 1',
            episodes: [],
        }],

}
const testShow2 = {
    //add in approprate test data structure here.
    name: "",
    image: {},
    summary: "",
    seasons: [{
        id: 1,
        name: "S1",
        episodes: [{}]
    },
    {
        id: 2,
        name: "S2",
        episodes: [{}]
    },
    {
        id: 3,
        name: "S3",
        episodes: [{}]
    }],
}

test('renders testShow and no selected Season without errors', () => {
    render(<Show show={testShow} selectedSeason='none' />)

});

test('renders Loading component when prop show is null', () => {
    render(<Loading show={null} />)
    const loadingtext = screen.queryAllByText('Fetching data...');
    expect(loadingtext).toBeTruthy();

});

test('renders same number of options seasons are passed in', () => {
    render(<Show show={testShow} selectedSeason='none' />)
    const numSeasons = testShow.seasons
    expect(numSeasons).toHaveLength(1)
});

// test('handleSelect is called when an season is selected', () => {
//     const mockHandleSelect = jest.fn();

//     render(<Show show={testShow} selectedSeason={'none'} handleSelect={mockHandleSelect} />);
//     // const change = screen.getAllByTestId('season-option')
//     // userEvent.selectOptions(change[1]);
//     // expect(mockHandleSelect).toBeCalled()
//     const showOptions = screen.getAllByTestId("season-option");

//     userEvent.selectOptions(showOptions[1]);

//     expect(mockHandleSelect).toHaveBeenCalled();

// });
test('handleSelect is called when an season is selected', async () => {
    const mockHandle = jest.fn(() => {
        console.log(`halp`)
    })

    render(<Show
        show={testShow2}
        selectedSeason="none"
        handleSelect={mockHandle}
    />)

    const selectSeason = screen.queryByText("Select A Season Here")
    // console.log('hi ' + selectSeason)
    userEvent.click(selectSeason)

    const clickSeasonThree = screen.queryByText("S3")
    // console.log(`kill me ${clickSeasonThree}`)
    userEvent.click(clickSeasonThree)

    expect(clickSeasonThree).toBeVisible
    expect(mockHandle).toHaveBeenCalled()
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
});

//Tasks:
//1. Build an example data structure that contains the show data in the correct format. A show should contain a name, a summary and an array of seasons, each with a id, name and (empty) list of episodes within them. Use console.logs within the client code if you need to to verify the structure of show data.
//2. Test that the Show component renders when your test data is passed in through show and "none" is passed in through selectedSeason.
//3. Test that the Loading component displays when null is passed into the show prop (look at the Loading component to see how to test for it's existance)
//4. Test that when your test data is passed through the show prop, the same number of season select options appears as there are seasons in your test data.
//5. Test that when an item is selected, the handleSelect function is called. Look at your code to see how to get access to the select Dom element and userEvent reference materials to see how to trigger a selection.
//6. Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render the episode component when the selectedSeason prop has a valid season index.
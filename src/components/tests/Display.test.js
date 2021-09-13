import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Display from './../Display';
import mockFetchShow from '../../api/fetchShow';

jest.mock('../../api/fetchShow');

const testShow = {
    name: "Test Show",
    image:{
        medium: "https://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
        original: "https://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"
        },
    seasons: [{id: 0, name: "Test Season 1", episodes: []},
                {id: 1, name: "Test Season 2", episodes: [{
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

test('Display component renders without any passed in props', ()=>{
    render(<Display />);
    const imageSelector = screen.queryByAltText("header image");
    expect(imageSelector).toBeInTheDocument();
});


test('when the fetch button is pressed, the show component will display with correct # of seasons', async ()=>{
 
    render(<Display />);
    mockFetchShow.mockResolvedValueOnce(testShow);

    const button = screen.getByRole("button");
    userEvent.click(button);

    await waitFor(()=> {
        const showContainer = screen.getByTestId("show-container");
        expect(showContainer).toBeInTheDocument();
    });

    const seasonOptions = screen.getAllByTestId("season-option");
    expect(seasonOptions).toHaveLength(3);

});

test("calls displayFunc when button is clicked", async ()=>{
    mockFetchShow.mockResolvedValue(testShow);
    const mockDisplayFunc = jest.fn();

    render(<Display displayFunc={mockDisplayFunc}/>)

    const button = screen.getByRole("button");
    userEvent.click(button);

    await waitFor(()=>{
        expect(mockDisplayFunc.mock.calls.length === 1).toBeTruthy();
        expect(mockDisplayFunc.mock.calls.length).toBe(1);
        expect(mockDisplayFunc.mock.calls).toHaveLength(1);
        expect(mockDisplayFunc).toHaveBeenCalled();
    });
});














///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
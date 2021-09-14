import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Display from './../Display';


const testDisplay = {
    handleSelect: jest.fn(),
    show: {
        name: "Bobby",
        summary: "Welcome to Bobby's World",
        seasons: [{
            id: 1,
            name: "Bobby Life",
            episodes: [{
                id: 1,
                name: "",
                image: null,
                season: 1,
                number: 1,
                summary: "without image",
                runtime: 1
            }]
        }]
    },
    selectedSeason: 0,

}

test("renders without an error", ()=> {
    render(<Display/>);
});


test("fetch button is pressed, the show component will display", () => {
    render(<Display show={testDisplay.show}/>);

    const fetchButton = screen.getByRole("button");
    userEvent.click(fetchButton);

    const show = screen.getByText(/show/i);
    expect(show).toBeVisible();
});

// test("fetch button is pressed, the amount of select options rendered is equal to the amount of seasons", () => {
//     render(<Display selectedSeason={testDisplay.selectedSeason}/>);

//     const fetchButton = screen.getByRole("button");
//     userEvent.click(fetchButton);

//     const select = screen.getByText(/selectedSeason/i);
//     expect(select).toBeInTheDocument();
// })










///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
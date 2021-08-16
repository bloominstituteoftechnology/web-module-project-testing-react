import React from 'react';
import { screen, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import Display from '../Display';
import fetchShow from "../../api/fetchShow"
jest.mock('../../api/fetchShow')

const testShow = {
    name: "",
    image: null,
    summary: "",
    seasons: [
        {
            id: 1,
            name: "Season 1",
            episodes: [],
        },
        {
            id: 2,
            name: "Season 2",
            episodes: [],

        }
    ],
}

test("Render Display without any props passed in", ()=>{
    render(<Display/>)
})

test("When fetch button is clicked, show component displays", async ()=>{
    fetchShow.mockResolvedValueOnce({
            name: "fake show",
            image: null,
            summary: "fake summary",
            seasons: [
                { id:1, name: "season 1", episodes: [] },
                { id:2, name: "season 2", episodes: [] }
            ],
    });

    render(<Display />)
    const button = screen.getByRole("button");
    userEvent.click(button);
    const show = await screen.findByTestId("show-container")
    expect(show).toBeInTheDocument()

})


///Tasks:
//1. X Add in nessisary imports and values to establish the testing suite.
//2. X Test that the Display component renders without any passed in props.
//3. X Rebuild or copy a show test data element as used in the previous set of tests.
//4. X Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5.  Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6.  Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
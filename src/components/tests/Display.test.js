import { render, screen, waitFor } from '@testing-library/react';
import React from 'react'
import Display from '../Display'
import userEvent from '@testing-library/user-event';
import fetchShow from '../../api/fetchShow';
jest.mock('../../api/fetchShow')

test("renders without errors", () =>{
    render(<Display/>);
})

const testData = {
    id:1987,
    name: "",
    image: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
    seasons: [
                {id:0, name: "Season 1", episodes: [
                    {summary: "episode 1", image: null},
                    {summary: "episode 2", image: null}
                ]}, 
                {id:1, name: "Season 2", episodes: [
                    {summary: "episode 1", image: null},
                    {summary: "episode 2", image: null}
                ]}, 
                {id:2, name: "Season 3", episodes: [
                    {summary: "episode 1", image: null},
                    {summary: "episode 2", image: null}
                ]}, 
                {id:3, name: "Season 4", episodes: [
                    {summary: "episode 1", image: null},
                    {summary: "episode 2", image: null}
                ]}
            ],
    number: 1,
    summary: "Dr. Alexei reveals what the Russians have been building, and Eleven sees where Billy has been. Dustin and Erica stage a daring rescue.",
    runtime: 1
}

test("show component displays", async () =>{
    fetchShow.mockResolvedValueOnce(testData)
    console.log("started test")
    render(<Display/>)


    console.log("displa rendered")
    const fetbutton = screen.getByRole("button")
    userEvent.click(fetbutton)

    
    
    const display = await screen.findByTestId("show-container");
    expect(display).toBeInTheDocument();
});
    test('renders season options matching fetch return when button is clicked', async () =>{
        fetchShow.mockResolvedValueOnce(testData)
        
        render(<Display/>);
        const button =  screen.getByRole('button');
        userEvent.click(button)

        await waitFor(() =>{
            const seasonOptions= screen.queryAllByTestId('season-option');
            expect(seasonOptions).toHaveLength(4)
        })
    
}
)










///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
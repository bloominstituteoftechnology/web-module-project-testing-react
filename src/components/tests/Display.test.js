import React from "react"

import {findAllByTestId, findByTestId, findByText, getByRole, getByText,render,screen, waitFor } from "@testing-library/react"

import userEvent from "@testing-library/user-event";

import Display from "./../Display";

import fetchShow from "../../api/fetchShow";
import { ExpectationFailed } from "http-errors";

jest.mock("../../api/fetchShow")




const testShow = {

    name: "Test Stranger Things",
    summary: "summary",
    seasons: [{id: '1', name: 'hello', episodes: []},{id: '2', name: 'hellooo', episodes: []}, {id: '3', name: 'my name is helloo', episodes: []}

]}

test("renders ithout error", () =>{
    render(<Display/>)

})


test("render component when button is clicked", async () =>{
    render(<Display/>)
    fetchShow.mockResolvedValueOnce(testShow)
    const button = screen.getByRole("button")
    userEvent.click(button)   

    const shComponent = await screen.findByTestId("show-container")

    expect(shComponent).toBeInTheDocument()


 
})


test("readers season ", async () => {
fetchShow.mockResolvedValueOnce(testShow)

render(<Display/>)

const button = screen.getByRole("button")
userEvent.click(button)

await waitFor(()=>{
    const options = screen.queryAllByTestId("season-option")
    expect(options).toHaveLength(3)
})
})




///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
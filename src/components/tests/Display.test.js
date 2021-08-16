
import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fetchShow from "../../api/fetchShow";
import Display from '../Display';

jest.mock("../../api/fetchShow")

const testShow = {
    name: "stuff",
    sumarry: "sumarry",
    seasons: [
        {
            id: "1", 
            name: "name",
            episodes: []
        }
    ]
    //add in approprate test data structure here.
}

test("renders", () => {
    render(<Display/>)
})

// test("fetch click", async () => {
//     const { getByTestId, findByTestId, getAllByTestId } = render(<Display/>)
//     const button = getByTestId("fetch-button")
//     userEvent.click(button)

//     const show = await findByTestId("show-container")
//     expect(show).toBeInTheDocument()

//     const options = getAllByTestId("season-option")
//     axios.get.mockResolvedValue(testShow)

//     expect(options).toHaveLength(testShow.seasons.length + 1)
// })


test("when the fetch button is pressed, the show component will display", async () => {
    fetchShow.mockResolvedValueOnce({
      name: "fake show",
      image: null,
      summary: "fake summary",
      seasons: [
        { id: 1, name: "season 1", episodes: [] },
        { id: 2, name: "season 2", episodes: [] },
      ],
    });
    const { getAllByTestId, findByTestId } = render(<Display />);
    const button = getAllByTestId("fetch-button")[0];
    userEvent.click(button);
    const show = await findByTestId("show-container");
    expect(show).toBeInTheDocument();
  });

test("Options equal to seasons", async () => {
    fetchShow.mockResolvedValueOnce({
        name: "fake show",
        image: null,
        summary: "fake summary",
        seasons: [
        { id: 1, name: "season 1", episodes: [] },
        { id: 2, name: "season 2", episodes: [] },
        ],
    });
    const { getAllByTestId, findAllByTestId } = render(<Display />);
    const button = getAllByTestId("fetch-button")[0]
    userEvent.click(button)
    const options = await findAllByTestId("season-option")
    expect(options).toHaveLength(2)
})

test("Function passed is called", async () => {
    const mockFunction = jest.fn();
    fetchShow.mockResolvedValueOnce(fetchShow());
    const { getAllByTestId } = render(<Display displayFunc={mockFunction}/>)
    const button = getAllByTestId("fetch-button")[0]
    await userEvent.click(button)
    expect(mockFunction.mock.calls).toHaveLength(1)
})
///Tasks: 
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
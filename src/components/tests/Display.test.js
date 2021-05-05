import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Display from "../Display";
import Show from "../Show";

const testShow = {
  //add in appropriate test data structure here.
  name: "",
  summary: "",
  seasons: [
    {
      id: 0,
      name: "",
      episodes: [],
    },
    {
      id: 1,
      name: "",
      episodes: [],
    },
    {
      id: 2,
      name: "",
      episodes: [],
    },
    {
      id: 3,
      name: "",
      episodes: [],
    },
  ],
};

test("renders without error", () => {
  render(<Show />);
});

test("when the fetch button is pressed, the show component will display", () => {
  const mockFetch = jest.fn(() => {
    "fetched data";
  });
  render(<Display show={testShow} fetch={mockFetch} />);

  const button = screen.getByRole("button");
  fireEvent.click(button);

});

test("when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.", () => {
  const mockFetch = jest.fn(() => {
    "fetched data";
  
    render(<Display fetch={mockFetch} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(button).toHaveLength(4)

  });
}


///Tasks:
//1. Add in necessary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.

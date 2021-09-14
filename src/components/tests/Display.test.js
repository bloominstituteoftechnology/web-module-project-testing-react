import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Display from "../Display";

import mockFetchShow from "../../api/fetchShow";
jest.mock("../../api/fetchShow.js");

const testShow = {
  name: "Test Series",
  summary: "A test summary",
  image: {
    medium:
      "https://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
    original:
      "https://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
  },
  seasons: [
    {
      id: 0,
      name: "Test 1",
      episodes: [],
    },
    {
      id: 1,
      name: "Test 2",
      episodes: [],
    },
    {
      id: 2,
      name: "Test 3",
      episodes: [],
    },
    {
      id: 3,
      name: "Test 4",
      episodes: [],
    },
  ],
};

test("renders without error", () => {
  render(<Display />);
});

test("renders Show component when fetch button pressed", async () => {
  mockFetchShow.mockResolvedValueOnce(testShow);

  render(<Display />);

  const button = screen.getByRole("button");
  userEvent.click(button);

  const showContainer = await screen.findByTestId("show-container");

  expect(showContainer).toBeInTheDocument();
});

test("on fetch button click, renders select options equal to the amount of seasons in test data", async () => {
  mockFetchShow.mockResolvedValueOnce(testShow);

  render(<Display />);

  const button = screen.getByRole("button");
  userEvent.click(button);

  const options = await screen.findAllByTestId("season-option");

  expect(options).toHaveLength(4);
  expect(options).not.toHaveLength(0);
});

test("on fetch button click, displayFunc is called", async () => {
  mockFetchShow.mockResolvedValueOnce(testShow);
  const displayFunc = jest.fn();

  render(<Display displayFunc={displayFunc} />);

  const button = screen.getByRole("button");
  userEvent.click(button);

  await waitFor(() => {
    expect(displayFunc).toHaveBeenCalled();
  });
});

///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Show from "./../Show";
import userEvent from "@testing-library/user-event";

const testShow = {
  name: "test show",
  summary: "insert here",
  seasons: [
    { id: 0, name: "Season 1", episodes: [] },
    { id: 1, name: "Season 2", episodes: [] },
  ],
};
test("renders without errors", () => {
  render(<Show show={testShow} selectedSeason={"none"} />);
});

test("renders Loading component when prop show is null", () => {
  render(<Show show={null} />);
  const loadingDisplay = screen.queryByTestId("loading-container");

  expect(loadingDisplay).toBeTruthy();
  expect(loadingDisplay).toBeInTheDocument();
});

test("renders same number of options seasons are passed in", () => {
  render(<Show show={testShow} selectedSeason={"none"} />);
  const seasons = screen.queryAllByTestId("season-option");

  expect(seasons).toHaveLength(2);
});

test("handleSelect is called when an season is selected", () => {
  const handleSelect = jest.fn();
  render(
    <Show show={testShow} selectedSeason={"none"} handleSelect={handleSelect} />
  );
  const selectSeason = screen.getByLabelText(/select a season/i);

  fireEvent.change(selectSeason, { target: { value: 1 } });

  expect(handleSelect).toBeCalled();
});

test("component renders when no seasons are selected and when rerenders with a season passed in", () => {
  const { rerender } = render(<Show show={testShow} selectedSeason={"none"} />);
  let episodes = screen.queryByTestId("episodes-container");
  expect(episodes).not.toBeInTheDocument();

  rerender(<Show show={testShow} selectedSeason={1} />);
  episodes = screen.queryByTestId("episodes-container");
  expect(episodes).toBeInTheDocument();
});

// Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render
// the episode component when the selectedSeason prop has a valid season index.

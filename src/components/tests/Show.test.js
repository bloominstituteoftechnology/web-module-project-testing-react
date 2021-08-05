/* eslint-disable no-unused-vars */
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Show from "./../Show";

const testShow = {
  image: null,
  name: "test_show_name",
  summary: "test_show_summary",
  seasons: [
    {
      id: 1,
      name: "test_season_name",
      episodes: [
        {
          id: 1,
          name: "",
          image:
            "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
          season: 1,
          number: 1,
          summary: "test message",
          runtime: 1,
        },
      ],
    },
  ],
};

test("renders testShow and no selected Season without errors", () => {
  render(<Show show={testShow} selectedSeason="none" />);
});

test("renders Loading component when show={null}", () => {
  render(<Show show={null} selectedSeason="none" />);
  const loadingComponent = screen.getByTestId("loading-container");
  expect(loadingComponent).toBeInTheDocument();
});

test("renders same number of options as seasons that are passed in", () => {
  render(<Show show={testShow} selectedSeason="none" />);
  const seasonOptions = screen.getAllByTestId("season-option");
  expect(seasonOptions).toHaveLength(1);
});

test("handleSelect is called when an season is selected", () => {});

test("component renders when no seasons are selected and when rerenders with a season passed in", () => {});

//Tasks:
//1. Build an example data structure that contains the show data in the correct format. A show should contain a name, a summary and an array of seasons, each with a id, name and (empty) list of episodes within them. Use console.logs within the client code if you need to to verify the structure of show data.
//2. Test that the Show component renders when your test data is passed in through show and "none" is passed in through selectedSeason.
//3. Test that the Loading component displays when null is passed into the show prop (look at the Loading component to see how to test for it's existance)
//4. Test that when your test data is passed through the show prop, the same number of season select options appears as there are seasons in your test data.
//5. Test that when an item is selected, the handleSelect function is called. Look at your code to see how to get access to the select Dom element and userEvent reference materials to see how to trigger a selection.
//6. Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render the episode component when the selectedSeason prop has a valid season index.

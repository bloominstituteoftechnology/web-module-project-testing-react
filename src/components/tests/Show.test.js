import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Loading from "../../components/Loading";

import Show from "./../Show";
import Episode from "../Episode";

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

test("renders testShow and no selected Season without errors", () => {
  render(<Show show={testShow} selectedSeason={"none"} />);
});

test("renders Loading component when prop show is null", () => {
  const { getByText } = render(<Loading show={null} />);
  const message = getByText(/Fetching data/i);

  expect(message).toBeInTheDocument();
});

// test("renders same number of options seasons are passed in", () => {
//     const

//     const seasons =

//     expect(seasons).toHaveLength(4)
// });

test("handleSelect is called when an season is selected", () => {
  const mockHandleSelect = jest.fn(() => {
    return "Your Season";
  });
  render(
    <Show
      show={testShow}
      selectedSeason={"none"}
      handleSelect={mockHandleSelect}
    />
  );

  const dropdown = screen.getByRole("combobox");
  userEvent.selectOptions(dropdown, "2");

  expect(mockHandleSelect).toHaveBeenCalled();
});

test("component renders when no seasons are selected and when rerenders with a season passed in", () => {
  const { rerender } = render(<Show show={testShow} selectedSeason={"none"} />);

  let renderedEpisodes = screen.queryByTestId(/episodes-container/i);

  expect(renderedEpisodes).not.toBeInTheDocument();

  rerender(<Show show={testShow} selectedSeason={1} />);

  renderedEpisodes = screen.queryByTestId(/episodes-container/i);

  expect(renderedEpisodes).toBeInTheDocument();
});

//Tasks:
//1. Build an example data structure that contains the show data in the correct format. A show should contain a name, a summary and an array of seasons, each with a id, name and (empty) list of episodes within them. Use console.logs within the client code if you need to to verify the structure of show data.
//2. Test that the Show component renders when your test data is passed in through show and "none" is passed in through selectedSeason.
//3. Test that the Loading component displays when null is passed into the show prop (look at the Loading component to see how to test for it's existence)
//4. Test that when your test data is passed through the show prop, the same number of season select options appears as there are seasons in your test data.
//5. Test that when an item is selected, the handleSelect function is called. Look at your code to see how to get access to the select Dom element and userEvent reference materials to see how to trigger a selection.
//6. Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render the episode component when the selectedSeason prop has a valid season index.

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Show from "./../Show";

const testShow = {
  //add in approprate test data structure here.

  name: "Stranger Things",
  image: {
    medium:
      "https://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
    original:
      "https://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
  },
  summary:
    "A love letter to the '80s classics that captivated a generation, Stranger Things is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.",
  seasons: [
    {
      id: 0,
      name: "Season 1",
      episodes: [
        {
          id: 553946,
          url: "https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
          name: "Chapter One: The Vanishing of Will Byers",
          season: 1,
          number: 1,
          type: "regular",
          airdate: "2016-07-15",
          airtime: "",
          airstamp: "2016-07-15T12:00:00+00:00",
          runtime: 49,
          image:
            "https://static.tvmaze.com/uploads/images/medium_landscape/342/855786.jpg",
          summary:
            "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.",
          _links: {
            self: {
              href: "https://api.tvmaze.com/episodes/553946",
            },
          },
        },
        {
          id: 578663,
          url: "https://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
          name: "Chapter Two: The Weirdo on Maple Street",
          season: 1,
          number: 2,
          type: "regular",
          airdate: "2016-07-15",
          airtime: "",
          airstamp: "2016-07-15T12:00:00+00:00",
          runtime: 56,
          image:
            "https://static.tvmaze.com/uploads/images/medium_landscape/342/855787.jpg",
          summary:
            "While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.",
          _links: {
            self: {
              href: "https://api.tvmaze.com/episodes/578663",
            },
          },
        },
      ],
    },
    {
      id: 1,
      name: "Season 2",
      episodes: [
        {
          id: 909340,
          url: "https://www.tvmaze.com/episodes/909340/stranger-things-2x01-chapter-one-madmax",
          name: "Chapter One: MADMAX",
          season: 2,
          number: 1,
          type: "regular",
          airdate: "2017-10-27",
          airtime: "",
          airstamp: "2017-10-27T12:00:00+00:00",
          runtime: 48,
          image:
            "https://static.tvmaze.com/uploads/images/medium_landscape/342/855794.jpg",
          summary:
            "One year after the events with the Upside Down and the Demogorgon, Will meets with a government doctor. The boys discover that there's a new player in town, and Jim pays a visit to El.",
          _links: {
            self: {
              href: "https://api.tvmaze.com/episodes/909340",
            },
          },
        },
        {
          id: 909342,
          url: "https://www.tvmaze.com/episodes/909342/stranger-things-2x02-chapter-two-trick-or-treat-freak",
          name: "Chapter Two: Trick or Treat, Freak",
          season: 2,
          number: 2,
          type: "regular",
          airdate: "2017-10-27",
          airtime: "",
          airstamp: "2017-10-27T12:00:00+00:00",
          runtime: 56,
          image:
            "https://static.tvmaze.com/uploads/images/medium_landscape/132/332034.jpg",
          summary:
            "The boys go trick-or-treating on Halloween, and Will has another vision. Meanwhile, El relieves the days following her escape from the Upside Down, and Dustin finds something in the garbage can.",
          _links: {
            self: {
              href: "https://api.tvmaze.com/episodes/909342",
            },
          },
        },
        {
          id: 909343,
          url: "https://www.tvmaze.com/episodes/909343/stranger-things-2x03-chapter-three-the-pollywog",
          name: "Chapter Three: The Pollywog",
          season: 2,
          number: 3,
          type: "regular",
          airdate: "2017-10-27",
          airtime: "",
          airstamp: "2017-10-27T12:00:00+00:00",
          runtime: 51,
          image:
            "https://static.tvmaze.com/uploads/images/medium_landscape/132/332039.jpg",
          summary:
            "Dustin takes in a stray and calls it D'Artagnan. However, his plans to show it to Mr. Clarke don't go as intended. Meanwhile, Max tries to convince Mike to let her join the group, El sneaks out to pay her friends a visit, and Will decides to take a stand and face his fears.",
          _links: {
            self: {
              href: "https://api.tvmaze.com/episodes/909343",
            },
          },
        },
      ],
    },
  ],
};

test("renders testShow and no selected Season without errors", () => {
  render(<Show show={testShow} selectedSeason={"none"} handleSelect={null} />);
});

test("renders Loading component when prop show is null", () => {
  render(<Show show={null} selectedSeason={"none"} handleSelect={null} />);
  const message = screen.queryByText(/Fetching data.../i);
  expect(message).toBeInTheDocument();
  expect(message).toBeTruthy();
  expect(message).toHaveTextContent("Fetching data...");
});

test("renders same number of options seasons are passed in", () => {
  render(<Show show={testShow} selectedSeason={"none"} handleSelect={null} />);
  const options = screen.queryAllByTestId("season-option");
  expect(options).toHaveLength(testShow.seasons.length);
});

test("handleSelect is called when an season is selected", () => {
  const fakeHandleSelect = jest.fn();

  render(
    <Show
      show={testShow}
      selectedSeason={"none"}
      handleSelect={fakeHandleSelect}
    />
  );
  const options = screen.queryAllByTestId("season-option");

  userEvent.selectOptions(screen.getByLabelText("Select A Season"), "0");
  expect(fakeHandleSelect.mock.results.length === 1).toBeTruthy();
  expect(fakeHandleSelect.mock.results.length).toBe(1);
  expect(fakeHandleSelect.mock.results).toHaveLength(1);
  expect(fakeHandleSelect).toBeCalledTimes(1);
});

test("component renders when no seasons are selected and then rerenders with a season passed in", () => {
  const { rerender } = render(<Show show={testShow} selectedSeason={"none"} />);
  let episodes = screen.queryByTestId("episodes-container");
  expect(episodes).not.toBeInTheDocument();

  rerender(<Show show={testShow} selectedSeason={"1"} />);
  episodes = screen.queryByTestId("episodes-container");
  expect(episodes).toBeInTheDocument();
});

//Tasks:
//1. Build an example data structure that contains the show data in the correct format. A show should contain a name, a summary and an array of seasons, each with a id, name and (empty) list of episodes within them. Use console.logs within the client code if you need to to verify the structure of show data.
//2. Test that the Show component renders when your test data is passed in through show and "none" is passed in through selectedSeason.
//3. Test that the Loading component displays when null is passed into the show prop (look at the Loading component to see how to test for it's existance)
//4. Test that when your test data is passed through the show prop, the same number of season select options appears as there are seasons in your test data.
//5. Test that when an item is selected, the handleSelect function is called. Look at your code to see how to get access to the select Dom element and userEvent reference materials to see how to trigger a selection.
//6. Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render the episode component when the selectedSeason prop has a valid season index.

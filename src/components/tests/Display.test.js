import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Display from "../Display";

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

test("renders Display and no selected Season without errors", () => {
  render(<Display />);
});

test("Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.", async () => {
  render(<Display />);
  const button = screen.getByRole("button");
  userEvent.click(button);
  const container = await screen.findByTestId("show-container");
  expect(container).toBeInTheDocument();
});

test("Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.", async () => {
  render(<Display />);
  const button = screen.getByRole("button");
  userEvent.click(button);
  const container = await screen.findByTestId("show-container");
  expect(container).toBeInTheDocument();
  const options = await screen.findAllByTestId("season-option");

  expect(options).toHaveLength(4);
  console.log(
    "🚀 ~ file: Display.test.js ~ line 161 ~ test ~ options.length",
    options.length
  );
});

test("Test that when the fetch button is pressed, this function is called.", async () => {
  const fakeHDisplayFunc = jest.fn();

  render(<Display displayFunc={fakeHDisplayFunc} />);
  const button = screen.getByRole("button");
  userEvent.click(button);
  const container = await screen.findByTestId("show-container");
  expect(container).toBeInTheDocument();
  expect(fakeHDisplayFunc).toBeCalledTimes(1);
});

///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.

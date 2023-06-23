import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Episode from "./../Episode";

test("renders without error", () => {
  render(<Episode episode={exampleEpisodeData} />);
});

test("renders the summary test passed as prop", () => {
  render(<Episode episode={exampleEpisodeData} />);
  const summaryData = screen.getByText(exampleEpisodeData.summary);

  expect(summaryData).toBeInTheDocument();
  expect(summaryData).toBeTruthy();
  expect(summaryData).toHaveTextContent(exampleEpisodeData.summary);
});

test("renders default image when image is not defined", () => {
  render(<Episode episode={nullImgData} />);
  const imgData = screen.getByAltText(
    "https://i.ibb.co/2FsfXqM/stranger-things.png"
  );

  expect(imgData).toBeTruthy();
  expect(imgData).toBeVisible();
  expect(imgData).not.toBeNull();
});

// ----- EXAMPLE EPISODE TEST OBJECT -----
const exampleEpisodeData = {
  airdate: "2016-07-15",
  airstamp: "2016-07-15T12:00:00+00:00",
  airtime: "",
  id: 553946,
  image:
    "https://static.tvmaze.com/uploads/images/medium_landscape/342/855786.jpg",
  name: "Chapter One: The Vanishing of Will Byers",
  number: 1,
  rating: { average: 8.2 },
  runtime: 49,
  season: 1,
  summary:
    "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.",
  type: "regular",
  url: "https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
};
const nullImgData = {
  airdate: "2016-07-15",
  airstamp: "2016-07-15T12:00:00+00:00",
  airtime: "",
  id: 553946,
  image: null,
  name: "Chapter One: The Vanishing of Will Byers",
  number: 1,
  rating: { average: 8.2 },
  runtime: 49,
  season: 1,
  summary:
    "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.",
  type: "regular",
  url: "https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
};

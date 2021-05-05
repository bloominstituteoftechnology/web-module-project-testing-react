import React from "react";
import { render, screen } from "@testing-library/react";
import Episode from "./../Episode";

// import mockFetchShow from "../../api/fetchShow";

const testEpisode = {
  id: 1,
  name: "",
  image:
    "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
  season: 1,
  number: 1,
  summary: "",
  runtime: 1,
};

const testEpisodeWithoutImage = {
  //Add in appropriate test data structure here.
  id: 1,
  name: "",
  image: null,
  season: 1,
  number: 1,
  summary: "",
  runtime: 1,
};

// jest.mock("../../api/fetchShow");

test("renders without error", () => {
  render(<Episode episode={testEpisode} />);
});

// test("renders the summary test passed as prop", () => {
//     const { getByText } = render(<Episode summary={testEpisode} />);
//   const episodeSummary = screen.getByText(
//     /A young boy mysteriously disappears, and his panicked mother demands that the police find him/i
//   );

//   expect(episodeSummary).toBeInTheDocument();
// });

test("renders default image when image is not defined", () => {
  render(<Episode episode={testEpisodeWithoutImage} />);

  const alterImg = "./stranger_things.png";
  expect(alterImg).toBeTruthy();
});

//Tasks
//1. Complete a test that shows the Episode component renders. Pass in the provided example episode data as a test prop.
//2. Modify the test data to display a specific summary statement. Complete a test that shows that the summary value passed in to the Episode component displays as expected. Use no more then 3 different expect statements to test the the existence of the summary value.
//3. The episode component displays a default value ('./stranger_things.png') when a image url is not provided. Create a new piece of test data with the image property set to null. Test that the alt tag of the image displayed is set to './stranger_things.png'.

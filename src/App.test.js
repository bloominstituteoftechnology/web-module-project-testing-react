import React from "react";
import {
  fireEvent,
  getByText,
  queryByRole,
  render,
  screen,
  userEvent,
  waitFor,
  wrapper,
} from "@testing-library/react";
import App from "./App";
import Episode from "./components/Episode";
import Display from "./components/Display";
import { fetchEpisodes as mockFetchEpisodes } from "./api/fetchShow";
import fetchShow from "./api/fetchShow";
import Episodes from "./components/Episodes";
test("target dropdown", async () => {
  render(<App />);

  await waitFor(() => {
    const placeholder = screen.queryAllByPlaceholderText("Select an option");
    console.log(placeholder);
  });
});
describe("Test runner!", () => {
  test("App Renders", () => {
    render(<App />);
  });
  test("Display renders", () => {
    render(<Display />);
  });
});
describe("Test Episode", () => {
  const testData = {
    id: 0,
    image: null,
    name: "Testing Things",
    season: 1,
    number: 1,
    summary: "Testing Things",
    runtime: 60,
  };
  //   render(<Episode episode={testData} />);
  //   const imgTarget = screen.queryByRole("img");
  //   expect(imgTarget.getAttribute("src")).toBe("./stranger_things.png");
  //   expect(imgTarget.getAttribute("alt")).toBe("./stranger_things.png");
  render(<App />);
});

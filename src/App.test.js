import React from "react";
import {
  fireEvent,
  getAllByText,
  getByText,
  queryByRole,
  queryByText,
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
import Show from "./components/Show";
describe("Test runner!", () => {
  test("target dropdown", async () => {
    render(<App />);

    await waitFor(() => {
      const placeholder = screen.queryAllByPlaceholderText("Select an option");
      console.log(placeholder);
    });
  });
  test("The Episode Component", async () => {
    const rW = render(<Display />);
    const img = rW.getByRole("img");
    rW.debug(img);
    expect(img.getAttribute("alt")).toEqual("./stranger_things.png");
    return render(img.setAttribute("src", null));
  });
  const testShow = {
    selectedSeason: "none",
    show: {
      name: "Testing Things",
      summary: "Testing Things is about running test!",
      seasons: [
        { id: 0, name: "Testing Vol 1", episodes: [] },
        { episodes: [], id: 1, name: "Testing Vol 2" },
        { episodes: [], id: 2, name: "Testing Vol 3" },
        { episodes: [], id: 3, name: "Testing Vol 4" },
        { episodes: [], id: 4, name: "Testing Vol 5" },
      ],
    },
  };
  test("The Show Component", () => {
    console.log(testShow);
    const testing = render(<Show props={testShow} />);
  });
});

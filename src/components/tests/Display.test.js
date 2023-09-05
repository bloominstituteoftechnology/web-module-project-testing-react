import React from 'react';
import { render, fireEvent, screen, userEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './../Display';

import mockFetchShow from "./../../api/fetchShow";
jest.mock("./../../api/fetchShow");

const show = {
    name: "test-name",
    image: "test-img",
    summary: "test-summary",
    seasons: [
        { id: 0, name: "Season 1", episodes: [] },
        { id: 1, name: "Season 2", episodes: [] },
        { id: 2, name: "Season 3", episodes: [] },
        { id: 3, name: "Season 4", episodes: [] },
        { id: 4, name: "Season 5", episodes: [] },
    ]
}

test('renders without errors with no props', () => {
    render(<Display />)
});


test('renders Show component when the button is clicked ', async () => {
    mockFetchShow.mockResolvedValueOnce(show);
    render(<Display />)
    const button = screen.queryByRole("button");
    fireEvent.click(button);

    const episodes = await screen.findByTestId("show-container");
    expect(episodes).toBeInTheDocument();
});

test('renders show season options matching your data when the button is clicked', async() => {
    mockFetchShow.mockResolvedValueOnce(show);
    render(<Display />)
    const button = screen.queryByRole("button");
    fireEvent.click(button);
    
    await waitFor(() => {
        const seasonOptions = screen.queryAllByTestId("season-option");
        expect(seasonOptions).toHaveLength(5);
    })
});

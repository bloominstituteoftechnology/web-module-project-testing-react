import React from 'react';
import { fireEvent, render, screen, wait } from '@testing-library/react';
import Display from '../Display';

import mockFetchShows from '../../api/fetchShow';
jest.mock('../../api/fetchShow');

const testShow = {
    name: '',
    image: '',
    summary: '',
    seasons: [
        {id:0, name: "Season 1", episodes: []}, 
        {id:1, name: "Season 2", episodes: []}, 
        {id:2, name: "Season 3", episodes: []}, 
        {id:3, name: "Season 4", episodes: []}
      ]
  }

test("renders without error", () => {
    render(<Display />);
});

test('fetches and renders show data', async () => {
    render(<Display />);
    mockFetchShows.mockResolvedValue({
      data: {
        name: '',
        image: '',
        summary: '',
        seasons: [
            {id:0, name: "Season 1", episodes: []}, 
            {id:1, name: "Season 2", episodes: []}, 
            {id:2, name: "Season 3", episodes: []}, 
            {id:3, name: "Season 4", episodes: []}
          ]
      }
    });

    const button = screen.getByRole("button");
    fireEvent.click(button);

    await wait();

    expect(screen.getByTestId("show-container")).not.toBeNull();

});

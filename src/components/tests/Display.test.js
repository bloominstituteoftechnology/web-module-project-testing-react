import React from 'react';
import { fireEvent, render, screen, wait, waitFor } from '@testing-library/react';
import Display from '../Display';

import mockFetchShow from '../../api/fetchShow';
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

  const testLength = testShow.seasons.length

test("renders without error", () => {
    render(<Display />);
});

test('fetches and renders show data', async () => {
    mockFetchShow.mockResolvedValueOnce(testShow);

    const { getByText, getByTestId } = render(<Display />);
    
    const fetchButton = getByText(/Press to Get Show Data/i);
    fireEvent.click(fetchButton);


    await waitFor(() => expect(getByTestId(/show-container/i)).not.toBeNull());

    

});

test('amount of select options rendered is equal to the amount of seasons in test data', async () => {
    mockFetchShow.mockResolvedValueOnce(testShow);
    render(<Display />);
    

    const button = screen.getByRole("button");
    fireEvent.click(button);

    

    await wait();

    const options = screen.queryAllByTestId("season-option");
    expect(options.length).toBe(testLength)
    
});

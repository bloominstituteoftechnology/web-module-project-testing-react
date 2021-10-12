import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Display from '../Display';
import userEvent from '@testing-library/user-event';

import mockFetchShow from '../../api/fetchShow';
jest.mock('../../api/fetchShow');

const testShowData = {
	name:"test Show Name",
	summary:"test Sumary blah blah blah",
	seasons: [
		{
			id: 0,
			name: "Season 1",
			episodes: []
		},
		{
			id: 1,
			name: "Season 2",
			episodes: []
		},
		{
			id: 2,
			name: "Season 3",
			episodes: []
		}
	]
}

test("Display Components renders without props", () => {
	render(<Display/>)
})

test("Displays show name and summary when button is clicked", async () => {
	mockFetchShow.mockResolvedValueOnce(testShowData);
	render(<Display />);
	const button = screen.getByRole('button');
	
	userEvent.click(button);
	const showDisplay = await screen.findByTestId('show-container');
	expect(showDisplay).toBeInTheDocument();
})

test("Check to see if episodes match dropdown options", async () => {
	mockFetchShow.mockResolvedValueOnce(testShowData);
	render(<Display mockFetchShow={mockFetchShow} />);
	const button = screen.getByRole('button');
	userEvent.click(button);

	await waitFor(() => {
		const seasonOption = screen.queryAllByTestId('season-option');
		expect(seasonOption).toHaveLength(3);
	})
})



///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
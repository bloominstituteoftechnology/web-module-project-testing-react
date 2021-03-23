//1. Add in nessisary imports and values to establish the testing suite.

import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import Display from './../Display';
import userEvent from '@testing-library/user-event';

//2. Test that the Display component renders without any passed in props.
test('Test that the Display component renders without any passed in props', () => {
  render(<Display displayFun={[]}/>);
})

//3. Rebuild or copy a show test data element as used in the previous set of tests.
const testShow = {
    //add in approprate test data structure here.
    image: {
        medium: "",
        original: ""
    },
    name: "House Hunters",
    seasons: [
        {
        id: 0, name: "", episodes: [],
        },
    ],
    summary: "",
}

//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
test('Test that when the fetch button is pressed, the show component will display', async () => {
  render(<Display displayFun={[]} />)
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  userEvent.click(button)

  const display = await screen.findByTestId('show-container')
  expect(display).toBeInTheDocument();
})

//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
test('Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.', async () => {
  render(<Display displayFun={testShow} />)

  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  userEvent.click(button)

  waitFor(() => expect(screen.getAllByTestId('season-option')).toHaveLength(testShow.seasons.length));

})

//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
test('Test that when the fetch button is pressed, this function is called.Test that when the fetch button is pressed, this function is called.', async () => {
  
  const mockDisplayFunc = jest.fn();
  render(<Display handleClick={mockDisplayFunc} />)
  
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  userEvent.click(button)
  waitFor(() => {
    expect(mockDisplayFunc).toHaveBeenCalled();
  })
})

///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
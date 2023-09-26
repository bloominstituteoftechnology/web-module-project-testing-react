import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './../Display';
import { userEvent } from '@testing-library/user-event/dist/types/setup';
import mockFetchShow from './../../api/fetchShow'

jest.mock('./../../api/fetchShow')

const testShow = {
    name: "test show",
    summary: "test summary",
    seasons: [
        {
            id: 0,
            name: "season 1",
            episodes: []
        },
        {
            id: 1,
            name: "season 2",
            episodes: []
        },
        {
            id: 2,
            name: "season 3",
            episodes: []
        }
    ]
}

test('renders without errors with no props', async () => { });

test('renders Show component when the button is clicked ', async () => { 
    
    mockFetchShow.mockREsolvedValueONce(testShow);
    render(<Display />)
    const button = screen.getByRole('button');
    userEvent.clickButton();

    const show = await screen.findByTestId('show-container');
    expect(show).toBeInTheDocument();
});

test('renders show season options matching your data when the button is clicked', async () => {
    
    
    mockFetchShow.mockREsolvedValueONce(testShow);
    render(<Display />)
    const button = screen.getByRole('button');
    userEvent.clickButton();

    await waitFor(()=>{
        const seaonOptions = screen.queryAllByTestIdAllByAltTestId('season-option');
        expect(seasonOptions).toHaveLength(2);
    })
 });

 test('displayFunc is called when the fetch button is pressed', async ()=>{
    mockFetchShow.mockREsolvedValueONce(testShow);
    const displayFunc = jest.fn();

    render(<Display displayFunc={displayFunc} />)
    const button = screen.getByRole('button');
    userEvent.clickButton();

    await waitFor(()=>{
        expect(displayFunc).toHaveBeenCalled();
    })
 })

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';
import userEvent from '@testing-library/user-event';
import {showObj} from './Display.test'

test('renders without errors', () => { render( <Show show={showObj} selectedSeason={"none"} />) });

test('renders Loading component when prop show is null', () => { 
    render (<Show show={null} selectedSeason={"none"} />);
    const loadingText = screen.getByTestId("loading-container");
    expect(loadingText).toBeInTheDocument();
 });

test('renders same number of options seasons are passed in', () => { 
    render (<Show show={showObj} selectedSeason={"none"} />);
    const options = screen.getAllByTestId("season-option");
    expect(options.length).toEqual(showObj.seasons.length);
 });

test('handleSelect is called when an season is selected', () => { 
    const handleSelectMock = jest.fn(() => 'hello')
    render (<Show show={showObj} selectedSeason={"none"} handleSelect={handleSelectMock} />);
    
    const selection = screen.getByLabelText('Select A Season');
    userEvent.selectOptions(selection, '1');

    expect(handleSelectMock).toHaveBeenCalledTimes(1);
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => { 
    const { rerender } = render (<Show show={showObj} selectedSeason={"none"} />);
    const season = screen.queryByText(showObj.seasons[0].episodes[0].name);
    expect(season).toBeNull();
    rerender( <Show show={showObj} selectedSeason={"1"} /> )
    const seasonOne = screen.queryAllByText(showObj.seasons[0].episodes[0].name);
    expect(seasonOne).not.toBeNull();
 });
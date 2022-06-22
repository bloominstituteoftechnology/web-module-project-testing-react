import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';
import { episodeData } from './Episode.test';
import userEvent from '@testing-library/user-event';


const showObj = {
    name: 'The Dragon Prince',
    summary: 'Two human princes forge an unlikely bond with the elfin assassin sent to kill them, embarking on an epic quest to bring peace to their warring lands.',
    seasons: [
        {
            id: '1',
            name: 'Season 1',
            episodes: [episodeData, episodeData]
        }, 
        {
            id: '2',
            name: 'Season 2',
            episodes: [episodeData, episodeData]
        }, 
        {
            id: '3',
            name: 'Season 3',
            episodes: [episodeData, episodeData]
        }]
}

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
    render (<Show show={showObj} selectedSeason={"none"} />);
    const selection = screen.getByLabelText('Select A Season');
    userEvent.selectOptions(selection, '1');

 });

test('component renders when no seasons are selected and when rerenders with a season passed in', () => { 
    render (<Show show={showObj} selectedSeason={"none"} />);
    const season = screen.queryByText(showObj.seasons[1].name);
    // expect(season).toBeNull();
 });
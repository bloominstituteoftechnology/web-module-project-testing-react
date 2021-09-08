import React from 'react';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
    id:1,
    name: "",
    image: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
    season: 1,
    number: 1,
    summary: "Wubba lubba dub dub",
    runtime: 1
}

const testEpisodeWithoutImage = {
    id: 1,
    name: '',
    image: '',
    season: 1,
    number: 1,
    summary: '',
    runtime: 1
}

test("renders without error", () => {
    render(<Episode episode={testEpisode} />)
});

test("renders the summury test passed as prop", ()=>{
    render(<Episode episode={testEpisode} />)
    const summary = screen.queryByText(/Didn't see that coming/i)
    expect(summary).toBeTruthy()
    expect(summary).toBeInTheDocument()
    expect(summary).not.toBeFalsy()
});

test("renders default image when image is not defined", ()=>{
    render(<Episode episode={testEpisodeWithoutImage} />)
    const img = screen.getAllByText('./stranger_things.png')
    expect(img).toHaveAttribute('alt', './stranger_things.png')
    expect(img.alt).toContain(/stranger_things.png/i)
})

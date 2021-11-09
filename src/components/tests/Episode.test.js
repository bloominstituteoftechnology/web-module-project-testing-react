import React from 'react';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
    id:1,
    name: "",
    image: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
    season: 1,
    number: 1,
    summary: "Movie summary: After the mysterious and sudden vanishing of a young boy, the people of a small town begin to uncover secrets of a government lab, portals to another world and sinister monsters. The boy's mother (Joyce) desperately tries to find him, convinced he is in grave danger, while the police chief searches for answers",
    runtime: 1
}

const testEpisodeWithoutImage = {
    id: 1,
    name: "",
    image: "",
    season: 1,
    number: 1,
    summary: "",
    runtime: 1
}

test("renders without error", () => {
    render(<Episode episode = { testEpisode } />);
});

test("renders the summury test passed as prop", ()=>{
    render(<Episode episode = { testEpisode } />);

    const summary = screen.queryByText(/ test /i);

    expect(summary).toBeInTheDocument();
    expect(summary).toBeTruthy();
    expect(summary).toHaveTextContent("Test Summary");
});

test("renders default image when image is not defined", ()=>{
    render(<Episode episode = { testEpisode } />);

    const img = screen.queryByAltText("./stranger_things.png");

    expect(img).toBeInTheDocument();
})

//Tasks
//1. Complete a test that shows the Episode component renders. Pass in the provided example episode data as a test prop.
//2. Modify the test data to display a specific summary statement. Complete a test that shows that the summary value passed in to the Episode component displays as expected. Use no more then 3 different expect statements to test the the existance of the summary value.
//3. The episode component displays a default value ('./stranger_things.png') when a image url is not provided. Create a new piece of test data with the image property set to null. Test that the alt tag of the image displayed is set to './stranger_things.png'.
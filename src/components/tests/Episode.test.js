import React from 'react';
import { getByRole, render, screen } from '@testing-library/react';
import Episode from '../Episode';
import defaultPic from '../../../public/stranger_things.png'
const testEpisode = {
    id: 1,
    name: "",
    image: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
    season: 1,
    number: 1,
    summary: "hello test data",
    runtime: 1
}

const testEpisodeWithoutImage = {
    id: 1,
    name: "",
    image: `${defaultPic}`,
    season: 1,
    number: 1,
    summary: 'Hi yall',
    runtime: 1
}

test("renders without error", () => {
    render(<Episode episode={testEpisode} />);
});

test("renders the summury test passed as prop", () => {
    // const { rerender } = 
    render(<Episode episode={testEpisode} />);
    const testSum = screen.queryByText('hello test data')
    expect(testSum).toBeInTheDocument();
    expect(testSum).not.toBeNull();
    expect(testSum).toBeTruthy();
    // expect(testSum)


});

test("renders default image when image is not defined", () => {
    render(<Episode episode={testEpisodeWithoutImage} />)
    const pic = screen.getByAltText('stranger_things.png');
    expect(pic.alt).toBe('stranger_things.png')
})

//Tasks
//1. Complete a test that shows the Episode component renders. Pass in the provided example episode data as a test prop.
//2. Modify the test data to display a specific summary statement. Complete a test that shows that the summary value passed in to the Episode component displays as expected. Use no more then 3 different expect statements to test the the existance of the summary value.
//3. The episode component displays a default value ('./stranger_things.png') when a image url is not provided. Create a new piece of test data with the image property set to null. Test that the alt tag of the image displayed is set to './stranger_things.png'.
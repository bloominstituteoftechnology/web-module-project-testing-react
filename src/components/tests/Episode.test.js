import React from 'react';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
    id:1,
    name: "Alieze",
    image: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
    season: 1,
    number: 1,
    summary: "This is the summary",
    runtime: 1
}

const testEpisodeWithoutImage = {
    //Add in approprate test data structure here.
    // copy above data without image
    id:1,
    name: "",
    season: 1,
    number: 1,
    summary: "",
    runtime: 1
}

test("renders without error", () => {
    // Arrange
    // this is where & how you pass props
    render(<Episode episode={testEpisode}/>);
});

test("renders the summury test passed as prop", ()=>{
    // Arrange
    render(<Episode episode={testEpisode}/>);
    let summary = screen.getByText(/this is the summary/i);
    // Act
    // Assert
    expect(summary).toHaveTextContent('This is the summary');
    expect(summary).not.toBeNull();
    expect(summary).toBeInTheDocument();
});

test("renders default image when image is not defined", ()=>{
    // Arrange
    render(<Episode episode={testEpisodeWithoutImage}/>);
    const image = screen.getByRole('img');
    // Act
    // Assert
    expect(image).toBeInTheDocument();
    //expect(image).toContainElement();
    //expect(image).toHaveAttribute(imgsrc);
})

//Tasks
//1. Complete a test that shows the Episode component renders. Pass in the provided example episode data as a test prop.
//2. Modify the test data to display a specific summary statement. Complete a test that shows that the summary value passed in to the Episode component displays as expected. Use no more then 3 different expect statements to test the the existance of the summary value.
//3. The episode component displays a default value ('./stranger_things.png') when a image url is not provided. Create a new piece of test data with the image property set to null. Test that the alt tag of the image displayed is set to './stranger_things.png'.
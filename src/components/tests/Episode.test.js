import React from 'react';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
    id:1,
    name: "",
    image: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
    season: 1,
    number: 1,
    summary: "Test for Passing Text Correctly",
    runtime: 1
}

const testEpisodeWithoutImage = {
    //Add in approprate test data structure here.
    id:1,
    name: "",
    image: null,
    season: 1,
    number: 1,
    summary: "",
    runtime: 1
}
//1. Complete a test that shows the Episode component renders. Pass in the provided example episode data as a test prop.
test("renders without error", () => {
    render(<Episode episode={testEpisode}/>)
});

//2. Modify the test data to display a specific summary statement. Complete a test that shows that the summary value passed in to the Episode component displays as expected. Use no more then 3 different expect statements to test the the existance of the summary value.
test("renders the summury test passed as prop", ()=>{
    //Arrange   
    //Also See Above //Add in appropriate test data to testEpisode summary
    render(<Episode episode={testEpisode}/>)
  
    //Act (Const's to find data)
    const summary = screen.queryByText(/Test for Passing Text Correctly/i);
    //Assert
    expect(summary).toHaveTextContent(/Test for Passing Text Correctly/i);
    expect(summary).toBeTruthy();
    expect(summary).toBeInTheDocument();
});


//3. The episode component displays a default value ('./stranger_things.png') when a image url is not provided. Create a new piece of test data with the image property set to null. Test that the alt tag of the image displayed is set to './stranger_things.png'.
test("renders default image when image is not defined", ()=>{
    //Arrange (render)
    render(<Episode episode={testEpisodeWithoutImage}/>);
    //Action (const/screen)
    const image = screen.getByAltText("./stranger_things.png");
    //Assert (expect)
    expect(image).toBeInTheDocument();
    expect(image).toBeTruthy();
    
})


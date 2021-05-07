








import React from 'react';
import {fireEvent, screen, render} from "@testing-library/react"
import userEvent from '@testing-library/user-event';

import Display from '../Display'
import Show from '../Show';

const displayFunction=()=>{
    console.log("I was called")
}

const testEpisodeWithoutImage = {
    
    id:1,
    name:'Chapter One: The Vanishing of Will Byers',
    image:null,
    season:1,
    number:1,
    summary:'A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boys friends conduct their own search, and meet a mysterious girl in the forest.',
    runtime:1
}


const episodes = [
    {
        id:1,
        name:'Chapter One: The Vanishing of Will Byers',
        image:null,
        season:1,
        number:1,
        summary:'A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boys friends conduct their own search, and meet a mysterious girl in the forest.',
        runtime:1
    },
    {
        id:2,
        name:'Chapter Two: The next Episode',
        image:null,
        season:1,
        number:2,
        summary:'Another episode',
        runtime:1
    }
]

const testShow = {
    //add in approprate test data structure here.
    name: "Stranger Things",
    summary: 'A love letter to the 80s classics that captivated a generation, Stranger Things is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.',
    seasons:[
        {id:0, name: "Season 1", episodes: [
            {
                id:1,
                name:'Chapter One: The Vanishing of Will Byers',
                image:null,
                season:1,
                number:1,
                summary:'A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boys friends conduct their own search, and meet a mysterious girl in the forest.',
                runtime:1
            },
            {
                id:2,
                name:'Chapter Two: The next Episode',
                image:null,
                season:1,
                number:2,
                summary:'Another episode',
                runtime:1
            }
        ]}, 
       
      ]
}

test("Renders without any passed props then rerenders then rebuild show data element",()=>{
    const {rerender} = render(<Display />)
    
    rerender(<Display show={testEpisodeWithoutImage}/>)
   
});


test('Test the fetch button, Show component has to be displayed',()=>{
    const mockGetData = jest.fn(() => { return episodes });
    const {rerender} = render(<Display fetchShow={mockGetData}/>)

    const button = screen.getByRole("button");
    fireEvent.click(button);

    rerender(<Show />)
    
})

test('Test the fetch button, seasons displayed is equal to test data',()=>{
    const mockGetData = jest.fn(() => { return testShow });
    render(<Display handleClick={mockGetData}/>)

    const button = screen.getByRole("button");
    fireEvent.click(button);
    
    const season = screen.queryByDisplayValue('Season 1')
    expect(season).toBeDefined()        
    
})

test('Test the fetch button, Test whether or not displayFunc is called',()=>{
    const mockGetData = jest.fn(() => { return testShow });
    const mockFunc=jest.fn(() => {return displayFunction})
     render(<Display handleClick={mockGetData} displayFunc={mockFunc}/>)
    
     const button = screen.getByRole("button");
     fireEvent.click(button);

     expect(mockFunc).toHaveBeenCalledTimes(1)

})


///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
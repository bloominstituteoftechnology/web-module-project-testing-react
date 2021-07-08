

import React from 'react';
import { render,screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Display from "../Display";
import testFetchShow from "../../api/fetchShow";
import TestShow from "../Show";
import Show from "../Show";
jest.mock("../Show");
jest.mock("../../api/fetchShow");

test("Display renders without props",()=>{
    render(<Display/>);
})
test("The show component will display when fetch button is pressed", async()=>{
    // arrange
    TestShow.mockImplementationOnce(()=>{
        return(<div>Show is being rendered</div>)
    });
    testFetchShow.mockResolvedValueOnce({
        seasons:[
            {
                id:0,
                name:'testing show 1234'
    
            },
            {
                id:1,
                name:'testing show 1234 1'
            },
            {   
                id:2,
                name:'testing show 1234 2'
            }
        ]
        
    });

    const {getByText} = render(<Display />);
    // act
    const button = screen.getAllByRole("button").find(b=>b.textContent==="Press to Get Show Data");
    userEvent.click(button);
    const show = await waitFor(()=>getByText("Show is being rendered"));  
    // assert
    expect(show).toBeInTheDocument();


});



test("when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.", async()=>{
    // arrange
    TestShow.mockImplementationOnce(()=>{
        return <option>something</option>;
    }).mockImplementationOnce(()=>{
        return<option>something2</option>;
    })
    testFetchShow.mockResolvedValueOnce({
        seasons:[]
    }).mockResolvedValueOnce({
        seasons:[
            {
                id:0,
                name:'testing show 1234'
    
            },
            {
                id:1,
                name:'testing show 1234 1'
            },
            {   
                id:2,
                name:'testing show 1234 2'
            }
        ]
        
    });
 
    const {getAllByRole,queryAllByRole, rerender} = render(<Display />);
    let button = screen.getAllByRole("button").find(b=>b.textContent==="Press to Get Show Data");
    userEvent.click(button);
    // act
    const optionsEmpty = await waitFor(()=>queryAllByRole("option"));
    // arrange
    rerender(<Display />);
    button = screen.getAllByRole("button").find(b=>b.textContent==="Press to Get Show Data");
    userEvent.click(button);
    // act
    const options = await waitFor(()=>getAllByRole("option"));
    // assert
    expect(options.length-optionsEmpty.length).toBe(3);
});
const optionalFunction = jest.fn(()=>{});
test("when the fetch button is pressed, the optional function is called.",()=>{
    render(<Display displayFunc={optionalFunction}/>);
    expect(optionalFunction.call.length).toBe(1);
})






///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
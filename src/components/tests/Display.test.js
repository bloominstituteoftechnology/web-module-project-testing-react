import React from 'react';
import { render,screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Display from "../Display";
import testFetchShow from "../../api/fetchShow";


jest.mock("../../api/fetchShow");


describe("Render Show",()=>{
    test("when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.", async()=>{
        testFetchShow.mockResolvedValueOnce(()=>{
            return{             
                seasons:[]
            };
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
            
        })
        
        // arrange
        let {queryAllByRole,getAllByRole,unmount} = render(<Display />);
        // act
        let button = getAllByRole("button").find(b=>b.textContent==="Press to Get Show Data");

        userEvent.click(button);
        
        let length1;
        await waitFor(()=>{
            length1 = queryAllByRole("option").length;
        });
        // arrange
        unmount(); // restore the local state
        render(<Display />);
        button  = screen.getAllByRole("button").find(b=>b.textContent==="Press to Get Show Data");
        userEvent.click(button);
        // act
        let length2;
        await waitFor(()=>{
            length2 = getAllByRole("option").length;
        });
        // assert
        expect(length2-length1).toBe(3);
    });
});


///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
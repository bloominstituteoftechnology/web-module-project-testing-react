import React from 'react';
import { render,screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Display from "../Display";
import testFetchShow from "../../api/fetchShow";
import TestShow from "../Show";

jest.mock("../Show");
jest.mock("../../api/fetchShow");


describe("Mock Show",()=>{
    test("Display renders without props",()=>{
        render(<Display/>);
    })
    test("The show component will display when fetch button is pressed", async()=>{
        TestShow.mockImplementationOnce(()=>{
            return(<div>Show is being rendered</div>);
        });
        testFetchShow.mockResolvedValue(()=>{
            return{             
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
            };
        });
        // arrange
        const {getByText} = render(<Display />);
        // act
        const button = screen.getAllByRole("button").find(b=>b.textContent==="Press to Get Show Data");
        userEvent.click(button);
        let show;
        await waitFor(()=>{
            show = getByText("Show is being rendered");
        });  
        // assert
        expect(show).toBeInTheDocument();
    });
    
});

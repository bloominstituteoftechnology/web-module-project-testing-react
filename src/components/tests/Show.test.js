import React from 'react';
import { queryByText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Show from './../Show';
import TestLoading from '../Loading';
const testShow = {
    //add in approprate test data structure here.
    seasons:[
        {
            id:0,
            name:'testing show 1234'

        }
    ]
}
// const { handleSelect, selectedSeason, show } = props;

const testHandleSelect = ()=>{

};
const testSelectedSeason = "none";

jest.mock('../Episodes',()=>()=>{
    return <div>Something</div>
    }
);

test('renders testShow and no selected Season without errors', ()=>{
    // arrange
    const {queryByText,getByText} = render(<Show handleSelect={testHandleSelect} selectedSeason={testSelectedSeason} show={testShow}/>);

    // act
    // assert
    expect(queryByText("Something")).toBeNull();
    expect(getByText("testing show 1234")).toBeInTheDocument();
});


jest.mock("../Loading");
test('renders Loading component when prop show is null', () => {
    // arrange

    TestLoading.mockImplementation(()=>{
        return(<div>Testing Loading 1234</div>)
    })

    const {getByText} = render(<Show handleSelect={testHandleSelect} selectedSeason={testSelectedSeason}show={null}/>);
    // act
    // assert
    expect(getByText("Testing Loading 1234")).toBeInTheDocument();
});


test('renders same number of options seasons are passed in', ()=>{
    // arrange
    const testOptionsShow = {
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
    }
    
    render(<Show handleSelect={testHandleSelect} selectedSeason={testSelectedSeason}show={{seasons:[]}}/>);
    
    // act
    const optionsEmpty = screen.getAllByRole("option");

    // arrange
    render(<Show handleSelect={testHandleSelect} selectedSeason={testSelectedSeason}show={testOptionsShow}/>);

    // act
    const options = screen.getAllByRole("option");

    // assert  

    expect(options.length-optionsEmpty.length*2).toBe(3);
});

const mockHandleSelect = jest.fn(); 
test('handleSelect is called when an season is selected', () => {
    // arrange
    const testOptionsShow = {
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
    }
    const {getByText} = render(<Show handleSelect={mockHandleSelect} selectedSeason={testSelectedSeason}show={testOptionsShow}/>);
    // act
    const option = getByText('testing show 1234 1');
    userEvent.selectOptions(option);
    // assert
    expect(mockHandleSelect.call.length).toBe(1);

});



jest.mock('../Episodes',()=>()=>{
    return <div>Episodes are rendered</div>
    }
);
test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    
    // arrange
    const testOptionsShow = {
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
    }
    const {queryByText,getByText, rerender} = render(<Show handleSelect={testHandleSelect} selectedSeason={"none"} show={testOptionsShow}/>);
    // act
    let episodeEle = queryByText("Episodes are rendered");
    // assert
    expect(episodeEle).toBeNull();
    // arrange
    rerender(<Show handleSelect={testHandleSelect} selectedSeason={0} show={testOptionsShow}/>)
    // act
    episodeEle = getByText("Episodes are rendered");
    // assert
    expect(episodeEle).toBeInTheDocument();
});

//Tasks:
//1. Build an example data structure that contains the show data in the correct format. A show should contain a name, a summary and an array of seasons, each with a id, name and (empty) list of episodes within them. Use console.logs within the client code if you need to to verify the structure of show data.
//2. Test that the Show component renders when your test data is passed in through show and "none" is passed in through selectedSeason.
//3. Test that the Loading component displays when null is passed into the show prop (look at the Loading component to see how to test for it's existance)
//4. Test that when your test data is passed through the show prop, the same number of season select options appears as there are seasons in your test data.
//5. Test that when an item is selected, the handleSelect function is called. Look at your code to see how to get access to the select Dom element and userEvent reference materials to see how to trigger a selection.
//6. Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render the episode component when the selectedSeason prop has a valid season index.
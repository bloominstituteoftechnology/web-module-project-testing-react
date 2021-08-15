# Unit Testing React Module Project: Stranger Things

This module explored passing props into test components, rerendering components and using mocks to both monitor functional props and override the functionality of external modules. In this project, you will practice each of these practices in the testing of an application that displays TV show data.

- [Unit Testing React Module Project: Stranger Things](#unit-testing-react-module-project-stranger-things)
  - [Objectives](#objectives)
  - [Introduction](#introduction)
  - [Instructions](#instructions)
    - [Task 1: Project Set Up](#task-1-project-set-up)
    - [Task 2: Project Requirements](#task-2-project-requirements)
      - [The Episode Component](#the-episode-component)
    - [The Show Component](#the-show-component)
    - [The Display Component](#the-display-component)
    - [Stretch goals](#stretch-goals)
  - [Rick Mansfield's Pull/push trail for Project Testing React](#rick-mansfields-pullpush-trail-for-project-testing-react)
  - [class Questions](#class-questions)
  - [Questions to ask yourself to create good Tests](#questions-to-ask-yourself-to-create-good-tests)
  - [What are some Possible unit Tests for MissionFrom.js?](#what-are-some-possible-unit-tests-for-missionfromjs)
  - [Arrange Act Assert](#arrange-act-assert)

## Objectives
- Understand how to test the effects of passing specific props into a component
- Understand how to monitor the behavior of functional mock props.
- Understand how and when to test using the rerender method
- Learn how to mock the use an external module

## Introduction
As a developer, you will often be asked to write tests for the feature you are building and even on features other developers have built. In this project, we will mimic a situation where you are asked to test someone else's code.

Get the project fired up and start using it as a user would. Try to go through the user sequences for this feature that you think users would go through. Once you have those in mind, you will have an idea of what to test in your application.

![Stranger Example](project_example.gif)

***Make sure to complete your tasks one at a time and complete test each task before proceeding forward.***

## Instructions
### Task 1: Project Set Up
* [ ] Create a forked copy of this project.
* [ ] Clone your OWN version of the repository in your terminal
* [ ] cd into the project base directory `cd web-module-project-reducer-pattern`
* [ ] Download project dependencies by running `npm install`
* [ ] Start up the app using `npm start`
- [ ] With each saved change in your editor, the test runner will re-run all the tests
- [ ] **IMPORTANT** If a test fails, use the test runner's error messages to find out why it is failing

### Task 2: Project Requirements
#### The Episode Component
> *This component displays a single episode worth of data. To test it, let's try our some different varieties on what we should pass into our component's props.*

* [ ] Complete a test that shows the Episode component renders. Pass in the provided example episode data as a test prop.
* [ ] Modify the test data to display a specific summary statement. Complete a test that shows that the summary value passed in to the Episode component displays as expected. **Use at least then 3 different types of expect statements to test the the existence of the summary value.**
* [ ] The episode component displays a default value ('./stranger_things.png') when a image url is not provided. Create a new piece of test data with the image property set to `null`. Test that the alt tag of the image displayed is set to './stranger_things.png'.

### The Show Component
> *This component holds all general information on our featured show. Here we will once again work with data props, mock a function for testing and rerender our component for a change in data.*

* [ ] Build an example data structure that contains the show data in the correct format. A show should contain a name, a summary and an array of seasons, each with a id, name and an (empty) list of episodes within them. Use console.logs within the client code if you need to to verify the structure of show data.
* [ ] Test that the Show component renders when your test data is passed in through show prop and "none" is passed in through selectedSeason prop.
* [ ] Test that the Loading component displays when null is passed into the show prop (look at the Loading component to see how to test for it's existence)
* [ ] Test that when your test data is passed through the show prop, the same number of season select options appear as there are seasons within your test data.
* [ ] Test that when an item is selected, the handleSelect function is called. Look at your code to see how to get access to the select DOM element and [userEvent reference materials](https://testing-library.com/docs/ecosystem-user-event/) to see how to trigger a selection.
* [ ] Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render the episode component when the selectedSeason prop has a valid season index.

### The Display Component
> *This component holds the state values of the application and handles api calls. In this component's tests, you work with mocking external modules and working with async / await / waitFor*
* [ ] Test that the Display component renders without any passed in props.
* [ ] Rebuild or copy the show test data element as used in the previous set of tests.
* [ ] Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
* [ ] Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
* [ ] Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.

### Stretch goals

- Add in a testing suite for the episodes component.

- Look up the `TVMaze` API. Add a dropdown with the titles of some other popular shows. Add the user sequence of choosing a different show to fetch data for different shows.

- Add React Router, and add the functionality to click an episode and navigate to an episode page.

## Rick Mansfield's Pull/push trail for Project Testing React

- [Link for convenience](https://github.com/LambdaSchool/web-module-project-testing-react/pull/65)

## class Questions 
1.  **What is end to end testing?**
    1.  End-to-end testing is a technique that tests the entire software product from beginning to end to ensure the application flow behaves as expected. It defines the product’s system dependencies and ensures all integrated pieces work together as expected. The main purpose of End-to-end (E2E) testing is to test from the end user’s experience by simulating the real user scenario and validating the system under test and its components for integration and data integrity. End-To-End (E2E) testing is a technique used to test an entire flow as if we were an actual user by simulating their actions (clicks, pressing certain keys, typing into a field, etc).
    2.  Simulates a user Clicking through a site
    3.  evaluates Entrie Applications
    4.  **_Cypress_**

2.  **What is integration Testing , and whay is it used?** [TestingXperts](https://www.testingxperts.com/blog/what-is-integration-testing)
    1.  What it is = Integration testing is one of the agile methodologies of software testing where individual components or units of code are tested to validate interactions among different software system modules. In this process, these system components are either tested as a single group or organized iteratively.
    2.  Why used = to validate the performance of the entire software system as a whole. 
    3.  Verify several components work together
    4.  Evaluates Application Systems
    5.  **_React-Testing-Library_**

3.  **Unit Tests**
    1.  Test Individual Functions/components
    2.  Evaluates Small Units of Code (not UI)
    3.  **_Jest_**
## Questions to ask yourself to create good Tests
1.  Does the component render by default without errors?
2.  How does the component changed depending on the props passed in?
3.  Does the component respond to user input?
4.  Does the compnent respont o state change (async calls / redux)?
5.  Does the component have error states?

## What are some Possible unit Tests for MissionFrom.js?
1. Does MissionForm Render Correctly without errors
2. Does it render the message "We are fetching data" correctly when isFetchingData is True?
3. Does the button render correctly when isfetchingData is false?
4. Does it correctly call props.getData() when button is clicked?

## Arrange Act Assert
1. Arrange: Setup the react components to be tested. 
2. Act: Execute the behaviour (if there is one) and extract what is being tested. 
3. Assert: Check to see if the expected responses occur. 
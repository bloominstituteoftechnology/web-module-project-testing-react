import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './../Display';

test('renders without errors with no props', async () => {
    render(<Display />)
});

test('renders Show component when the button is clicked ', async () => {
    render(<Display />)
    fireEvent.click(screen.getByRole('button'))
    expect(await screen.findByTestId('show-container')).toBeInTheDocument()
});

test('renders show season options matching your data when the button is clicked', async () => {
   render(<Display/>)
    fireEvent.click(screen.getByRole('button'))

    expect(await screen.findAllByTestId('season-option')).toHaveLength(4)
});

test('when the button is pressed, the optional displayfunc function runs', async() => {
    const spy = jest.fn()
    render (<Display displayFunc = {spy}/>)
    fireEvent.click(screen.getByRole('button'))
    await waitFor(()=>{expect(spy).toHaveBeenCalled()})
})

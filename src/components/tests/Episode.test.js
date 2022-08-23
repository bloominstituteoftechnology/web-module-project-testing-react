import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Episode from './../Episode';

const episode = {
    id: 1,
    image: 'https://i.ibb.co/2FsfXqM/stranger-things.png',
    name: 'jordon',
    season: 1,
    number: 1,
    summary: 'amazing show',
    runtime: 60
}

test("renders without error", () => {
    render(<Episode episode={episode}/>)
 });

test("renders the summary test passed as prop", () => {
    render(<Episode episode = {episode}/>)
    const summary = screen.getByText(/amazing show/)
    expect(summary).toBeInTheDocument()
    expect(summary).toHaveTextContent(/amazing show/)
    expect(screen.getByTestId('pSummary')).toHaveTextContent("amazing show")
});

test("renders default image when image is not defined", () => {
    render(<Episode episode = {{
        id: 1,
        image: null,
        name: 'jordon',
        season: 1,
        number: 1,
        summary: 'amazing show',
        runtime: 60
    }}/>)
    const img = screen.getByRole('img')
    expect(img.src).toContain('https://i.ibb.co/2FsfXqM/stranger-things.png')
    expect(img.alt).toContain('https://i.ibb.co/2FsfXqM/stranger-things.png')
 });

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Episode from './../Episode';

export const episodeData = {
    "id": 553946,
    "url": "https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
    "name": "Chapter One: The Vanishing of Will Byers",
    "season": 1,
    "number": 1,
    "type": "regular",
    "airdate": "2016-07-15",
    "airtime": "",
    "airstamp": "2016-07-15T12:00:00+00:00",
    "runtime": 49,
    "rating": {
        "average": 8.2
    },
    "image": "https://static.tvmaze.com/uploads/images/medium_landscape/342/855786.jpg",
    "summary": "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest. With his own friends in hand!",
    "_links": {
        "self": {
            "href": "https://api.tvmaze.com/episodes/553946"
        }
    }
}

const noImageData = {
    "id": 553946,
    "url": "https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
    "name": "Chapter One: The Vanishing of Will Byers",
    "season": 1,
    "number": 1,
    "type": "regular",
    "airdate": "2016-07-15",
    "airtime": "",
    "airstamp": "2016-07-15T12:00:00+00:00",
    "runtime": 49,
    "rating": {
        "average": 8.2
    },
    "image": null,
    "summary": "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest. With his own friends in hand!",
    "_links": {
        "self": {
            "href": "https://api.tvmaze.com/episodes/553946"
        }
    }
}

test("renders without error", () => { render( <Episode episode={episodeData} /> ) });

test("renders the summary test passed as prop", () => { 
    render( <Episode episode={episodeData} />);
    const summary = screen.getByText(/With his own friends in hand!/i);
    expect(summary).toBeInTheDocument();
    expect(summary.textContent).toContain("With his own friends in hand!");
 });

test("renders default image when image is not defined", () => { 
    render( <Episode episode={noImageData} />)
    const image = screen.getByRole('img');
    const imageAltVariable = screen.getByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png');
    expect(image.src).toEqual('https://i.ibb.co/2FsfXqM/stranger-things.png');
    expect(image.alt).toEqual(imageAltVariable.alt);
 });

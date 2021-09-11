import React from 'react';
import { render, screen, userEvent, waitFor } from '@testing-library/react';
import App from './App';
import Episode from './components/Episode'

test('target dropdown', async () => {
    render(<App />);

    await waitFor(() => {
        const placeholder = screen.queryAllByPlaceholderText('Select an option');
        console.log(placeholder);
    });

});

test('that episode component renders, providing it example episode data as a prop', () => {
    render(<Episode />);
    let title = screen.queryByText(/space missions/i);
    expect(title).not.toBeNull();
})
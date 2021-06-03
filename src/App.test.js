import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

test('target dropdown', async ()=>{
    render(<App/>);

    const button = screen.getByRole('button')
    userEvent.click(button)

    await waitFor(()=>{
        const placeholder = screen.queryAllByPlaceholderText('Select an option');
        console.log(placeholder);
    });
    
});
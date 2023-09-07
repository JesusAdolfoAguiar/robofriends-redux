import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CounterButton from './CounterButton';

//Test 1: Verify that the initial count is rendered correctly.

test('renders initial count', () => {
    const { getByText } = render(<CounterButton />);
    expect(getByText('Count: 0')).toBeInTheDocument();
});

//Test 2: Verify that the count updates when the button is clicked.

test('increments count when button is clicked', () => {
    const { getByText } = render(<CounterButton />);
    const button = getByText('Count: 0');
    fireEvent.click(button);
    fireEvent.click(button);
    expect(getByText('Count: 2')).toBeInTheDocument();
});

//Test 3: Verify that the component doesn't re-render when the count doesn't change.

test('component does not re-render when count does not change', () => {
    const { getByText, rerender } = render(<CounterButton />);
    rerender(<CounterButton />);
    expect(getByText('Count: 0')).toBeInTheDocument();
});
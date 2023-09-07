import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('should render Header component', () => {
    const { getByText } = render(<Header />);
    
    const headerText = getByText('Robofriends');
    const counterButton = getByText('Count: 0');
    
    expect(headerText).toBeInTheDocument();
    expect(counterButton).toBeInTheDocument();
  });
});

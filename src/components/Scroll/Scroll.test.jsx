import React from 'react';
import { render } from '@testing-library/react';
import Scroll from './Scroll';

describe('Scroll component', () => {
  test('renders children correctly', () => {
    const mockChildren = <div>Mock Children</div>;
    const { getByText } = render(<Scroll>{mockChildren}</Scroll>);

    // Here, you can assert that the rendered component has the expected children
    expect(getByText('Mock Children')).toBeInTheDocument();
  });

  test('renders with correct styles', () => {
    const { getByTestId } = render(<Scroll />);
    const scrollDiv = getByTestId('scroll-div');

    // Here, you can assert that the rendered component has the expected styles
    expect(scrollDiv).toHaveStyle('overflow-y: scroll');
    expect(scrollDiv).toHaveStyle('border: 5px solid black');
    expect(scrollDiv).toHaveStyle('height: 500px');
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import MainPage from './MainPage';

describe('MainPage', () => {
  //Declare a mock function for the onRequestRobots prop and any other necessary props:

  const mockProps = {
    onRequestRobots: jest.fn(),
    onSearchChange: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  };

  //Write the test case using the render function from React Testing Library:

  test('renders MainPage component', () => {
    render(<MainPage {...mockProps} />);
    // Add your assertions here
  });

  //Add your assertions inside the test case. For example, you can check if the loading text is rendered when isPending is true:

  test('renders MainPage component', () => {
    render(<MainPage {...mockProps} isPending={true} />);
    const loadingElement = screen.getByText(/Loading/i);
    expect(loadingElement).toBeInTheDocument(); 
  }); 
});

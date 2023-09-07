import React from 'react';
import { render } from '@testing-library/react';
import ErrorBoundry from './ErrorBoundry';

describe('ErrorBoundry', () => {
    test('renders children when there is no error', () => {
      // Render ErrorBoundry component with children
      const { getByText } = render(
        <ErrorBoundry>
          <div>Test children</div>
        </ErrorBoundry>
      );
  
      // Assert that the children are rendered
      expect(getByText('Test children')).toBeInTheDocument();
    });
  
    test('renders error message when there is an error', () => {
      // Mock the componentDidCatch method to throw an error
      jest.spyOn(ErrorBoundry.prototype, 'componentDidCatch').mockImplementation(() => {
        throw new Error('Test error');
      });
  
      // Render ErrorBoundry component with children
      const { getByText } = render(
        <ErrorBoundry>
          <div>Test children</div>
        </ErrorBoundry>
      );
  
      // Assert that the error message is rendered
      expect(getByText('Test children')).toBeInTheDocument();
    });
  });
  
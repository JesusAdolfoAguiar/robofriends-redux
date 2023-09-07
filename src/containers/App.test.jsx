import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';

const mockStore = configureStore([thunk]);

describe('App component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      searchRobots: {
        searchField: '',
      },
      requestRobots: {
        robots: [],
        isPending: false,
        error: '',
      },
    });
  });

  test('should render App component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.queryByTestId('app-component')).not.toBeInTheDocument();
  });
});

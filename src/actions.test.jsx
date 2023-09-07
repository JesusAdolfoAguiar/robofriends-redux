import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { setSearchField, requestRobots } from './actions';

import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from "./constants";

describe('setSearchField action', () => {
  test('should create an action to change the search field', () => {
    const text = 'test search';
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: text
    };
    expect(setSearchField(text)).toEqual(expectedAction);
  });
});

describe ('requestRobots action', () => {
    test('requestRobots fetches and dispatches data correctly', async () => {
        // Mock the fetch API to return a specific response
        const mockResponse = [{ id: 1, name: 'Robot 1' }, { id: 2, name: 'Robot 2' }];
        jest.spyOn(global, 'fetch').mockResolvedValue({
          json: jest.fn().mockResolvedValue(mockResponse),
        });
      
        // Create a mock dispatch function
        const mockDispatch = jest.fn();
      
        // Call the requestRobots action creator with the mock dispatch function
        await requestRobots()(mockDispatch);
      
        // Verify that the pending action was dispatched
        expect(mockDispatch).toHaveBeenCalledWith({ type: REQUEST_ROBOTS_PENDING });
      
        // Wait for the asynchronous calls to complete
        await waitFor(() => {
          // Verify that the success action was dispatched with the correct payload
          expect(mockDispatch).toHaveBeenCalledWith({
            type: REQUEST_ROBOTS_SUCCESS,
            payload: mockResponse,
          });
        });
      
        // Restore the fetch API to its original implementation
        global.fetch.mockRestore();
    });

    // test('requestRobots catches the error correctly', async () => {
    //     const mockDispatch = jest.fn(); // create a mock function to replace dispatch
    //     const mockError = new Error('Failed to fetch robots');
    
    //     jest.spyOn(global, 'fetch').mockRejectedValueOnce(mockError); // mock the fetch API to throw an error
    
    //     // assuming the function you're testing is called fetchData and it calls dispatch in the .catch statement
    //     await requestRobots()(mockDispatch);
    
    //     expect(mockDispatch).toHaveBeenCalledWith({
    //       type: REQUEST_ROBOTS_FAILED,
    //       payload: mockError
    //     });
    // });
})
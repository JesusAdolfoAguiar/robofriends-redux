import React from 'react';
import {render} from '@testing-library/react'
import CardList from './CardList';

test('expect to render CardList component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'JohnJohn',
            email: 'john@gmail.com'
        }
    ]
    const dom = render(<CardList robots={mockRobots}/>);
    expect(dom).toMatchSnapshot();
})
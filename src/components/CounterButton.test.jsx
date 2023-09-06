import React from 'react';
import CounterButton from './CounterButton';
import { render, queryByAttribute, fireEvent } from '@testing-library/react';

test('expect to render CounterButton component', () => {
    const mockColor = 'red';
    const dom = render(<CounterButton color={mockColor} />);
    expect(dom).toMatchSnapshot();
})

test('correctly increments the counter', () => {
    const mockColor = 'red';

    const dom = render(<CounterButton color={mockColor} />);
    const getById = queryByAttribute.bind(null, 'id');
    const buttonClick = getById(dom.container, 'counter');

    const handleClick = jest.fn();

    handleClick(fireEvent.click(buttonClick));

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(buttonClick).toHaveStyle('color: ButtonText');
})
import React from 'react';
import {render} from '@testing-library/react'
import Card from './Card';

describe('Card', () => {
    test('expect to render Card component', () => {
        const dom = render(<Card />);
        expect(dom).toMatchSnapshot();
    })
});

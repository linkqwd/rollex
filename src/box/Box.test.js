import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { Box } from './Box';


describe('Test Box component', () => {
    it('should render Box with children and props', () => {
        const wrapper = mount(
            <Box p='15px'><span className='test'>test</span></Box>
        );
        expect(wrapper.exists('div')).toEqual(true);
        expect(wrapper.contains(<span className='test'>test</span>)).toEqual(true);
        expect(wrapper.props().p).toEqual('15px');
    });

    it('renders correctly', () => {
        const rendered = create(<Box />).toJSON();
        expect(rendered).toMatchSnapshot();
    });

    it('it applies styles according to passed props', () => {
        const rendered = create(<Box mb='30px' />).toJSON();
        expect(rendered).toHaveStyleRule('margin-bottom', '30px');
    });
});

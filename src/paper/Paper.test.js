import React from 'react';
import { mount } from 'enzyme';
import { Paper } from './index';


describe('Test Paper component', () => {
    it('should render', () => {
        const wrapper = mount(
            <Paper>
                Example content
            </Paper>
        );

        expect(wrapper.find('div').text()).toEqual('Example content');
    });
});

import React from 'react';
import { mount } from 'enzyme';
import { Divider } from './index';


describe('Test Divider component', () => {
    it('should render', () => {
        const wrapper = mount(<Divider />);

        expect(wrapper.find('div').exists()).toEqual(true);
    });
});

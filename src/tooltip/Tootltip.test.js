import React from 'react';
import { mount } from 'enzyme';
import { Tooltip } from './index';

describe('Test Tooltip component', () => {
    it('should render', () => {
        const text = 'testing text';
        const wrapper = mount(<Tooltip content={text} />);
        expect(wrapper.find('div').text()).toContain(text);
    });
});

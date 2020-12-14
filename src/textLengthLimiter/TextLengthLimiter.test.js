import React from 'react';
import { mount } from 'enzyme';
import { TextLengthLimiter } from './index';


describe('Test TextLengthLimiter component', () => {
    it('should render', () => {
        const wrapper = mount(
            <TextLengthLimiter asTitle content='Some very long string.' max={10} />
        );
        expect(wrapper.find('span').text()).toEqual('Some ve...');
    });
});

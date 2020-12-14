import React from 'react';
import { mount } from 'enzyme';
import { Label } from './index';


describe('Test Label component', () => {
    it('should render', () => {
        const wrapper = mount(
            <Label>
                Example label
            </Label>
        );

        expect(wrapper.find('label').text()).toEqual('Example label');
    });
});

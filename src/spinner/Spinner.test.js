import React from 'react';
import { mount } from 'enzyme';
import { Spinner } from './index';

describe('Test Spinner component', () => {
    it('should render', () => {
        const wrapper = mount(<Spinner />);
        expect(wrapper.find('div').exists()).toEqual(true);
    });

    it('should render extra large', () => {
        const wrapper = mount(<Spinner size='extraLarge' />);
        expect(wrapper.find('div').exists()).toEqual(true);
    });

    it('should render large', () => {
        const wrapper = mount(<Spinner size='large' />);
        expect(wrapper.find('div').exists()).toEqual(true);
    });

    it('should render medium', () => {
        const wrapper = mount(<Spinner size='medium' />);
        expect(wrapper.find('div').exists()).toEqual(true);
    });

    it('should render small', () => {
        const wrapper = mount(<Spinner size='small' />);
        expect(wrapper.find('div').exists()).toEqual(true);
    });
});

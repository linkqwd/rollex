import React from 'react';
import { mount } from 'enzyme';
import { Error } from './index';


describe('Test Error component', () => {
    it('should render', () => {
        const errorText = 'Testing error message';
        const selector = 'selector';
        const wrapper = mount(
            <Error dataQa={selector}>
                {errorText}
            </Error>
        );

        expect(wrapper.find(`[data-qa="${selector}"]`).first().text()).toEqual(errorText);
    });

    it('should render with custom class', () => {
        const errorText = 'Testing error message';
        const clazz = 'testing-class';
        const wrapper = mount(
            <Error className={clazz}>
                {errorText}
            </Error>
        );

        expect(wrapper.find(`.${clazz}`).exists()).toEqual(true);
        expect(wrapper.find(`.${clazz}`).first().text()).toEqual(errorText);
    });
});

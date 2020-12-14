import React from 'react';
import { mount } from 'enzyme';
import { Svg } from './index';


describe('Test Icon component', () => {
    it('should render', () => {
        const wrapper = mount(
            <Svg viewBox='0 0 18 18'>
                <rect x='8' y='8.5' width='2' height='5' />
            </Svg>
        );

        expect(wrapper.find('svg').exists()).toEqual(true);
    });

    it('should render with custom class', () => {
        const clazz = 'testing-class';
        const wrapper = mount(
            <Svg viewBox='0 0 18 18' className={clazz}>
                <rect x='8' y='8.5' width='2' height='5' />
            </Svg>
        );

        expect(wrapper.find(`.${clazz}`).exists()).toEqual(true);
    });
});

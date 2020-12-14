import React from 'react';
import { mount } from 'enzyme';
import * as icons from './index';


describe('Test icons rendering', () => {
    Object.values(icons).map(
        icon => it(`should render ${icon.name}`, () => {
            const wrapper = mount(icon({}));
            expect(wrapper.find('svg').exists()).toEqual(true);
        })
    );
});

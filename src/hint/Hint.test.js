import React from 'react';
import { mount } from 'enzyme';
import { Hint } from './index';


describe('Test Hint component', () => {
    it('should render', () => {
        const hintText = 'Testing message';
        const elem = mount(
            <Hint>
                {hintText}
            </Hint>
        );
        expect(elem.find('div').contains(hintText)).toBe(true);
    });

    it('should render with custom class', () => {
        const hintText = 'Testing message';
        const clazz = 'testing-class';
        const elem = mount(
            <Hint className={clazz}>
                {hintText}
            </Hint>
        );
        expect(elem.find(`.${clazz}`).first().text()).toEqual(hintText);
    });
});

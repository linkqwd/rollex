import React from 'react';
import { mount } from 'enzyme';
import { Link } from './index';


describe('Test Link component', () => {
    it('should render', () => {
        const testText = 'Test text';
        const wrapper = mount(
            <Link onClick={() => {}}>
                {testText}
            </Link>
        );

        expect(wrapper.find('a').exists()).toEqual(true);
        expect(wrapper.text()).toEqual(testText);
    });

    it('should invoke onClick', () => {
        const onClickMock = jest.fn();
        const wrapper = mount(
            <Link onClick={onClickMock}>
                Test text
            </Link>
        );
        const link = wrapper.find('a');
        link.simulate('click');
        link.simulate('click');
        expect(onClickMock.mock.calls.length).toBe(2);
    });
});

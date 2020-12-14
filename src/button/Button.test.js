import React from 'react';
import { mount } from 'enzyme';

import { Button, LinkButton } from './index';

const testText = 'Test text';

describe('Test Button component', () => {
    it('should render', () => {
        const wrapper = mount(
            <Button
                onClick={() => {}}
            >
                {testText}
            </Button>
        );

        expect(wrapper.find('button').exists()).toEqual(true);
        expect(wrapper.text()).toEqual(expect.stringContaining(testText));
    });

    it('should invoke onClick', () => {
        const fnMock = jest.fn();
        const wrapper = mount(
            <Button onClick={fnMock}>
                {testText}
            </Button>
        );

        wrapper.find('button').simulate('click');
        expect(fnMock).toHaveBeenCalledTimes(1);

        wrapper.find('button').simulate('click');
        expect(fnMock).toHaveBeenCalledTimes(2);
    });

    it('should not invoke onClick when disabled', () => {
        const fnMock = jest.fn();
        let counter = 0;
        const wrapper = mount(
            <Button
                disabled
                onClick={() => ++counter}
            >
                {testText}
            </Button>
        );

        wrapper.find('button').simulate('click');
        expect(fnMock).toHaveBeenCalledTimes(0);

        wrapper.find('button').simulate('click');
        expect(fnMock).toHaveBeenCalledTimes(0);
        expect(counter).toEqual(0);
    });

    it('should render LinkButton', () => {
        const url = 'http://example.com';
        const wrapper = mount(
            <LinkButton href={url}>
                {testText}
            </LinkButton>
        );

        expect(wrapper.find('a').exists()).toEqual(true);
        expect(wrapper.find('a').prop('href')).toEqual(url);
        expect(wrapper.text()).toEqual(expect.stringContaining(testText));
    });

    it('should not has href attr when disabled', () => {
        const wrapper = mount(
            <LinkButton href='http://example.com' disabled>
                {testText}
            </LinkButton>
        );

        expect(wrapper.find('a').prop('href')).toEqual(null);
    });
});

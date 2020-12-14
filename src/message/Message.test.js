import React from 'react';
import { mount } from 'enzyme';
import { Message } from './index';


describe('Test Message component', () => {
    ['green', 'yellow', 'red', 'lightBlue'].map(
        themeName => it(`should render ${themeName} theme`, () => {
            const wrapper = mount(
                <Message theme={themeName}>
                    Example
                </Message>
            );
            expect(wrapper.find('div').first().exists()).toEqual(true);
            expect(wrapper.find('div').first().text()).toEqual('Example');
        })
    );
});

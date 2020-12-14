import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import { Layout } from './index';


describe('Test Layout component', () => {
    it('should render Layout', () => {
        const testText = 'Test text';
        const wrapper = mount(
            <Layout>
                <Layout.Header>{testText}</Layout.Header>
                <Layout.Footer>{testText}</Layout.Footer>
            </Layout>
        );

        expect(wrapper.exists('div')).toEqual(true);
        expect(wrapper.find('header').text()).toEqual(testText);
        expect(wrapper.find('footer').text()).toEqual(testText);
    });

    it('should render Layout with passed props', () => {
        const wrapper = mount(
            <Layout>
                <Layout.Header height='100px' shadow='none'>Hello</Layout.Header>
            </Layout>
        );

        expect(wrapper.exists('div')).toEqual(true);
        expect(wrapper.find('header').props().height).toEqual('100px');
        expect(wrapper.find('header').children().props().shadow).toEqual('none');
    });

    it('renders correctly', () => {
        const rendered = create(
            <Layout>
                <Layout.Header></Layout.Header>
                <Layout.Body></Layout.Body>
                <Layout.Footer></Layout.Footer>
            </Layout>
        ).toJSON();
        expect(rendered).toMatchSnapshot();
    });
});

import React from 'react';
import { mount } from 'enzyme';
import { Breadcrumb, BreadcrumbItem } from './index';


describe('Test Breadcrumb component', () => {
    it('should render', () => {
        const wrapper = mount(
            <Breadcrumb>
                <BreadcrumbItem dataQa='one' href='/one'>
                    One
                </BreadcrumbItem>
                <BreadcrumbItem dataQa='two' href='/two' active>
                    Two
                </BreadcrumbItem>
            </Breadcrumb>
        );

        expect(wrapper.find('a[data-qa="one"][href="/one"]').text()).toEqual('One');
        expect(wrapper.find('a[data-qa="two"][href="/two"]').text()).toEqual('Two');
    });
});

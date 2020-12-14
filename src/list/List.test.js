import React from 'react';
import { mount } from 'enzyme';
import { List, ListItem } from './index';


describe('Test List component', () => {
    it('should render', () => {
        const list = 'list';
        const firstItem = 'firstItem';
        const secondItem = 'secondItem';

        const wrapper = mount(
            <List dataQa={list}>
                <ListItem dataQa={firstItem}>
                    First item
                </ListItem>
                <ListItem dataQa={secondItem}>
                    Second item
                </ListItem>
            </List>
        );

        expect(wrapper.find(`[data-qa="${list}"]`).exists()).toEqual(true);
        expect(wrapper.find(`[data-qa="${firstItem}"]`).text()).toEqual('First item');
        expect(wrapper.find(`[data-qa="${secondItem}"]`).text()).toEqual('Second item');
    });
});

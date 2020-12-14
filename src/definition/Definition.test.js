import React from 'react';
import { mount } from 'enzyme';
import { Definition, DefinitionItem, DefinitionTerm, DefinitionValue } from './index';


describe('Test DefinitionList component', () => {
    it('should render', () => {
        const list = 'list';
        const firstItem = 'firstItem';
        const firstTerm = 'firstTerm';
        const firstValue = 'firstValue';
        const secondItem = 'secondItem';
        const secondTerm = 'secondTerm';
        const secondValue = 'secondValue';

        const wrapper = mount(
            <Definition dataQa={list}>
                <DefinitionItem dataQa={firstItem}>
                    <DefinitionTerm dataQa={firstTerm}>First term</DefinitionTerm>
                    <DefinitionValue dataQa={firstValue}>First value</DefinitionValue>
                </DefinitionItem>
                <DefinitionItem dataQa={secondItem}>
                    <DefinitionTerm dataQa={secondTerm}>Second term</DefinitionTerm>
                    <DefinitionValue dataQa={secondValue}>Second value</DefinitionValue>
                </DefinitionItem>
            </Definition>
        );

        expect(wrapper.find(`[data-qa="${list}"]`).exists()).toEqual(true);
        expect(wrapper.find(`[data-qa="${firstItem}"]`).exists()).toEqual(true);
        expect(wrapper.find(`[data-qa="${secondItem}"]`).exists()).toEqual(true);

        expect(wrapper.find(`[data-qa="${firstTerm}"]`).first().text()).toEqual('First term');
        expect(wrapper.find(`[data-qa="${firstValue}"]`).first().text()).toEqual('First value');

        expect(wrapper.find(`[data-qa="${secondTerm}"]`).first().text()).toEqual('Second term');
        expect(wrapper.find(`[data-qa="${secondValue}"]`).first().text()).toEqual('Second value');
    });
});

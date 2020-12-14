import React from 'react';
import { mount } from 'enzyme';
import { DropdownShift } from './index';


describe('Test DropdownShift component', () => {

    it('should render', () => {
        const elem = mount(
            <DropdownShift
                label='dropdown'
                selected='one'
                options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                ]}
            />
        );
        expect(elem.find('button').exists()).toBe(true);
        expect(elem.find('label').exists()).toBe(true);
    });

    it('should invoke onChange', () => {
        let selected = 'one';
        let name;
        const onChange = jest.fn((e) => {
            selected = e.target.value;
            name = e.target.name;
        });

        const elem = mount(
            <DropdownShift
                name='items'
                selected='one'
                options={[
                    { value: 'aa', label: 'One', dataQa: 'aa' },
                    { value: 'bb', label: 'Two', dataQa: 'bb' },
                ]}
                onChange={onChange}
            />
        );

        elem.find('button').simulate('click');
        elem.find('li').first().simulate('click');
        expect(onChange).toHaveBeenCalled();
        expect(selected).toBe('aa');
        expect(name).toBe('items');
    });

    it('should filter items', () => {
        const elem = mount(
            <DropdownShift
                searchable
                selected='aa'
                options={[
                    { value: 'aa', label: 'One', dataQa: 'one' },
                    { value: 'bb', label: 'Two', dataQa: 'two' },
                    { value: 'cc', label: 'Three', dataQa: 'three' },
                    { value: 'dd', label: 'Four', dataQa: 'four' },
                ]}
            />
        );
        elem.find('button').simulate('click');

        expect(elem.find('li[data-qa="one"]').exists()).toBe(true);
        expect(elem.find('li[data-qa="two"]').exists()).toBe(true);
        expect(elem.find('li[data-qa="three"]').exists()).toBe(true);
        expect(elem.find('li[data-qa="four"]').exists()).toBe(true);

        // Filter should not be case sensitive.
        elem.find('input').simulate('change', { target: { value: 'T' } });
        expect(elem.find('li[data-qa="one"]').exists()).toBe(false);
        expect(elem.find('li[data-qa="two"]').exists()).toBe(true);
        expect(elem.find('li[data-qa="three"]').exists()).toBe(true);
        expect(elem.find('li[data-qa="four"]').exists()).toBe(false);
    });

    it('should render noItemsText prop when there is no search results', () => {
        const elem = mount(
            <DropdownShift
                searchable
                noItemsText='not found'
                selected='aa'
                options={[
                    { value: 'aa', label: 'One' },
                    { value: 'bb', label: 'Two' },
                ]}
            />
        );
        const countOfLiElementsInList = 2;
        // first li - input wrapper
        // second li - wrapper for noItemsText prop

        elem.find('button').simulate('click');
        elem.find('input').simulate('change', { target: { value: 'hello' } });
        expect(elem.find('li')).toHaveLength(countOfLiElementsInList);
        expect(elem.find('li').at(1).text()).toBe('not found');
    });

    it('should render dropdownPlaceholder prop when prop selected is not provided', () => {
        const elem = mount(
            <DropdownShift
                searchable
                noItemsText='not found'
                selected=''
                dropdownPlaceholder='Choose a number'
                options={[
                    { value: 'aa', label: 'One' },
                    { value: 'bb', label: 'Two' },
                ]}
            />
        );
        expect(elem.find('button').text()).toBe('Choose a number');
    });

    it('should be disabled', () => {
        const elem = mount(
            <DropdownShift
                disabled
                selected='one'
                options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                ]}
            />
        );
        expect(elem.find('button').getDOMNode().disabled).toBe(true);
        expect(elem.find('button').props().disabled).toBe(true);
    });

    it('should render error message', () => {
        const error = 'Something went wrong';
        const elem = mount(
            <DropdownShift
                selected='one'
                options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                ]}
                error={error}
            />
        );

        expect(elem.find('div').contains(error)).toBe(true);
    });

    it('should render error from function', () => {
        const errorMock = jest.fn((fieldName) => `error.${fieldName}`);
        const elem = mount(
            <DropdownShift
                name='items'
                selected='one'
                options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                ]}
                error={errorMock}
            />
        );
        expect(errorMock).toHaveBeenCalledWith('items');
        expect(elem.find('div').contains('error.items')).toBe(true);
    });

    it('should render hint message', () => {
        const hint = 'Hint';
        expect(
            mount(
                <DropdownShift
                    selected='one'
                    options={[
                        { value: 'one', label: 'One' },
                        { value: 'two', label: 'Two' },
                    ]}
                    hint={hint}
                />
            ).find('div').contains(hint)
        ).toBe(true);
    });

    it('should render hint from function', () => {
        const hintMock = jest.fn((value) => `Value: ${value}`);
        const wrapper = mount(
            <DropdownShift
                selected='one'
                options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                ]}
                hint={hintMock}
            />
        );
        expect(hintMock).toHaveBeenCalledWith('one');
        expect(wrapper.find('div').contains('Value: one')).toBe(true);
    });
});

import React from 'react';
import { mount } from 'enzyme';
import { Dropdown } from './index';


describe('Test Dropdown component', () => {

    it('should render', () => {
        const elem = mount(
            <Dropdown
                name='items'
                selected='one'
                options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                    { value: 'three', label: 'Three' },
                    { value: 'four', label: 'Four' },
                ]}
            />
        );
        expect(elem.find('input[name="items"]').exists()).toBe(true);
    });

    it('should invoke onChange', () => {
        let selected = 'one';
        let name;
        const onChange = jest.fn((e) => {
            selected = e.target.value;
            name = e.target.name;
        });

        const elem = mount(
            <Dropdown
                name='items'
                selected='one'
                options={[
                    { value: 'aa', label: 'One', dataQa: 'aa' },
                    { value: 'bb', label: 'Two', dataQa: 'bb' },
                    { value: 'cc', label: 'Three', dataQa: 'cc' },
                    { value: 'dd', label: 'Four', dataQa: 'dd' },
                ]}
                onChange={onChange}
            />
        );
        const instance = elem.instance();

        expect(instance.state.open).toBe(false);
        elem.find('input[name="items"]').simulate('click');
        expect(instance.state.open).toBe(true);

        elem.find('div[data-qa="bb"]').simulate('click');
        expect(onChange).toHaveBeenCalled();
        expect(selected).toBe('bb');
        expect(name).toBe('items');
    });

    it('should filter items', () => {
        const elem = mount(
            <Dropdown
                searchable
                name='items'
                selected='one'
                options={[
                    { value: 'aa', label: 'One', dataQa: 'one' },
                    { value: 'bb', label: 'Two', dataQa: 'two' },
                    { value: 'cc', label: 'Three', dataQa: 'three' },
                    { value: 'dd', label: 'Four', dataQa: 'four' },
                ]}
            />
        );
        const instance = elem.instance();

        expect(instance.state.open).toBe(false);
        elem.find('input[name="items"]').simulate('click');
        expect(instance.state.open).toBe(true);
        expect(elem.find('div[data-qa="one"]').exists()).toBe(true);
        expect(elem.find('div[data-qa="two"]').exists()).toBe(true);
        expect(elem.find('div[data-qa="three"]').exists()).toBe(true);
        expect(elem.find('div[data-qa="four"]').exists()).toBe(true);

        // Filter should be case-insensitive.
        elem.find('input[name="items"]').simulate('change', { target: { value: 'T' } });
        expect(elem.find('div[data-qa="one"]').exists()).toBe(false);
        expect(elem.find('div[data-qa="two"]').exists()).toBe(true);
        expect(elem.find('div[data-qa="three"]').exists()).toBe(true);
        expect(elem.find('div[data-qa="four"]').exists()).toBe(false);
    });

    it('should be disabled', () => {
        const elem = mount(
            <Dropdown
                disabled
                name='items'
                selected='one'
                options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                    { value: 'three', label: 'Three' },
                    { value: 'four', label: 'Four' },
                ]}
            />
        );
        expect(elem.find('input[name="items"]').getDOMNode().disabled).toBe(true);
    });

    it('should render error message', () => {
        const error = 'Something went wrong';
        const elem = mount(
            <Dropdown
                name='items'
                selected='one'
                options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                    { value: 'three', label: 'Three' },
                    { value: 'four', label: 'Four' },
                ]}
                error={error}
            />
        );

        expect(elem.find('div').contains(error)).toBe(true);
    });

    it('should render error from function', () => {
        const errorMock = jest.fn((fieldName) => `error.${fieldName}`);
        const elem = mount(
            <Dropdown
                name='items'
                selected='one'
                options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                    { value: 'three', label: 'Three' },
                    { value: 'four', label: 'Four' },
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
                <Dropdown
                    name='items'
                    selected='one'
                    options={[
                        { value: 'one', label: 'One' },
                        { value: 'two', label: 'Two' },
                        { value: 'three', label: 'Three' },
                        { value: 'four', label: 'Four' },
                    ]}
                    hint={hint}
                />
            ).find('div').contains(hint)
        ).toBe(true);
    });

    it('should render hint from function', () => {
        const hintMock = jest.fn((value) => `Value: ${value}`);
        const wrapper = mount(
            <Dropdown
                name='items'
                selected='one'
                options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                    { value: 'three', label: 'Three' },
                    { value: 'four', label: 'Four' },
                ]}
                hint={hintMock}
            />
        );
        expect(hintMock).toHaveBeenCalledWith('one');
        expect(wrapper.find('div').contains('Value: one')).toBe(true);
    });
});

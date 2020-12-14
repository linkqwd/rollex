import React from 'react';
import { mount } from 'enzyme';
import { RadioGroup } from './index';


describe('Test RadioGroup component', () => {

    it('should render', () => {
        const elem = mount(
            <RadioGroup
                name='testing'
                options={[
                    { label: 'one', value: 'one' },
                    { label: 'two', value: 'two' },
                ]}
            />
        );
        expect(elem.find('input[value="one"]').exists()).toEqual(true);
        expect(elem.find('input[value="two"]').exists()).toEqual(true);
    });

    it('should invoke onChange', () => {
        let checked = 'two';
        const onChange = jest.fn((event) => checked = event.target.value);

        const elem = mount(<RadioGroup
            name='testing'
            checked='two'
            options={[
                { label: 'one', value: 'one' },
                { label: 'two', value: 'two' },
            ]}
            onChange={onChange}
        />);

        expect(elem.find('input[value="one"]').getDOMNode().checked).toEqual(false);
        expect(elem.find('input[value="two"]').getDOMNode().checked).toEqual(true);

        elem.find('input[value="one"]')
            .simulate('change', { target: { value: 'one' } });

        expect(elem.find('input[value="one"]').getDOMNode().checked).toEqual(true);
        expect(elem.find('input[value="two"]').getDOMNode().checked).toEqual(false);

        expect(onChange).toHaveBeenCalled();
        expect(checked).toBe('one');
    });

    it('should be disabled', () => {
        const elem = mount(<RadioGroup
            name='testing'
            options={[
                { label: 'one', value: 'one' },
                { label: 'two', value: 'two' },
            ]}
            disabled
        />);
        expect(elem.find('input[value="one"]').getDOMNode().disabled).toEqual(true);
        expect(elem.find('input[value="two"]').getDOMNode().disabled).toEqual(true);
    });

    it('should render error message', () => {
        const error = 'Something went wrong';
        const elem = mount(
            <RadioGroup
                name='testing'
                options={[
                    { label: 'one', value: 'one' },
                    { label: 'two', value: 'two' },
                ]}
                error={error}
                errorDataQa='testing-err'
            />
        );

        expect(elem.find('div').contains(error)).toBe(true);
    });

    it('should render error from function', () => {
        const errorMock = jest.fn((fieldName) => `error.${fieldName}`);
        const elem = mount(
            <RadioGroup
                name='testing'
                options={[
                    { label: 'one', value: 'one' },
                    { label: 'two', value: 'two' },
                ]}
                error={errorMock}
            />
        );
        expect(errorMock).toHaveBeenCalledWith('testing');
        expect(elem.find('div').contains('error.testing')).toBe(true);
    });

    it('should render hint message', () => {
        const hint = 'Hint';
        expect(
            mount(
                <RadioGroup
                    name='testing'
                    options={[
                        { label: 'one', value: 'one' },
                        { label: 'two', value: 'two' },
                    ]}
                    disabled
                    hint={hint}
                />
            ).find('div').contains(hint)
        ).toBe(true);
    });

    it('should render hint from function', () => {
        const hintMock = jest.fn((value) => `Value: ${value}`);
        const wrapper = mount(
            <RadioGroup
                name='testing'
                checked='one'
                options={[
                    { label: 'one', value: 'one' },
                    { label: 'two', value: 'two' },
                ]}
                hint={hintMock}
            />
        );
        expect(hintMock).toHaveBeenCalledWith('one');
        expect(wrapper.find('div').contains('Value: one')).toBe(true);
    });
});

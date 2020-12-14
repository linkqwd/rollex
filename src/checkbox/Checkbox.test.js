import React from 'react';
import { mount } from 'enzyme';
import { Checkbox } from './index';


describe('Test Checkbox component', () => {

    it('should invoke onChange', () => {
        let checked = true;
        const labelMock = jest.fn((checked) => checked ? 'ON' : 'OFF');
        const onChangeMock = jest.fn((event) => checked = event.target.checked);

        const elem = mount(
            <Checkbox
                name='testing'
                label={labelMock}
                checked={checked}
                onChange={onChangeMock}
            />
        );

        expect(elem.find('input[name="testing"]').getDOMNode().checked).toBe(true);
        expect(elem.find('span').contains('ON')).toBe(true);

        elem.find('input[name="testing"]')
            .simulate('change', { target: { checked: false } });

        expect(labelMock).toHaveBeenCalled();
        expect(onChangeMock).toHaveBeenCalled();
        expect(checked).toBe(false);
    });

    it('should be disabled', () => {
        expect(
            mount(
                <Checkbox
                    name='test'
                    disabled
                    checked
                    onChange={() => null}
                />
            )
                .find('input').getDOMNode().disabled
        ).toBe(true);
    });

    it('should render label message', () => {
        const labelMock = jest.fn((checked) => `Is checked: ${checked}`);
        expect(
            mount(
                <Checkbox
                    name='test'
                    label={labelMock}
                    checked
                    onChange={() => null}
                />
            ).find('span').contains('Is checked: true')
        ).toBe(true);
        expect(labelMock).toHaveBeenCalled();
    });

    it('should render error from function', () => {
        const errorMock = jest.fn((fieldName) => `error.${fieldName}`);
        const elem = mount(
            <Checkbox
                name='test'
                error={errorMock}
                checked
                onChange={() => null}
            />
        );
        expect(errorMock).toHaveBeenCalled();
        expect(elem.find('div').contains('error.test')).toBe(true);
    });
});

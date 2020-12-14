import React from 'react';
import { mount } from 'enzyme';
import { Switch } from './index';


describe('Test Switch component', () => {

    it('should invoke onChange', () => {
        let checked = true;
        const labelMock = jest.fn((checked) => checked ? 'ON' : 'OFF');
        const onChangeMock = jest.fn((event) => checked = event.target.checked);

        const elem = mount(
            <Switch
                name='testing'
                label={labelMock}
                checked={checked}
                onChange={onChangeMock}
            />
        );

        expect(elem.find('input[name="testing"]').getDOMNode().checked).toBe(true);
        expect(elem.find('div').contains('ON')).toBe(true);

        elem.find('input[name="testing"]')
            .simulate('change', { target: { checked: false } });

        expect(labelMock).toHaveBeenCalled();
        expect(onChangeMock).toHaveBeenCalled();
        expect(checked).toBe(false);
    });

    it('should be disabled', () => {
        const elem = mount(
            <Switch
                disabled
                name='testing'
                label='Testing'
                checked={false}
                onChange={() => null}
            />
        );
        expect(elem.find('input[name="testing"]').getDOMNode().disabled).toEqual(true);
    });

    it('should render label message', () => {
        const label = 'Testing';
        expect(
            mount(
                <Switch
                    disabled
                    name='testing'
                    label={label}
                    checked={false}
                    onChange={() => null}
                />
            ).find('div').contains(label)
        ).toBe(true);
    });
});

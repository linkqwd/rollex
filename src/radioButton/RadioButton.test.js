import React from 'react';
import { mount } from 'enzyme';
import { RadioButton } from './index';


describe('Test RadioButton component', () => {

    it('should render', () => {
        expect(mount(
            <RadioButton
                name='test'
                checked
                onChange={() => null}
            />
            ).find('input').exists()
        ).toBe(true);
    });

    it('should invoke onChange', () => {
        let checked = false;
        let tagName = '';
        const refFnMock = jest.fn((input) => tagName = input.tagName);
        const onChange = jest.fn((event) => checked = event.target.checked);

        mount(
            <RadioButton
                name='test'
                checked
                innerRef={refFnMock}
                onChange={onChange}
            />
        )
            .find('input')
            .simulate('change', { target: { checked: true } });

        expect(refFnMock).toHaveBeenCalled();
        expect(onChange).toHaveBeenCalled();
        expect(checked).toBe(true);
        expect(tagName).toBe('INPUT');
    });

    it('should be disabled', () => {
        expect(
            mount(
                <RadioButton
                    name='test'
                    disabled
                    checked
                    onChange={() => null}
                />
            )
                .find('input').getDOMNode().disabled
        ).toEqual(true);
    });
});

import React from 'react';
import { mount } from 'enzyme';
import { Label } from '../label';
import { Hint } from '../hint';
import { NumberInput } from './index';


describe('Test NumberInput component', () => {

    it('should render', () => {
        expect(
            mount(<NumberInput name='test' />)
                .find('input[name="test"]')
                .exists()
        ).toBe(true);
    });

    it('should invoke onChange', () => {
        let value;
        let rawValue;
        const onChangeMock = jest.fn((e) => {
            value = e.target.value;
            rawValue = e.target.rawValue;
        });
        mount(<NumberInput name='test' type='text' onChange={onChangeMock} />)
            .find('input[name="test"]')
            .simulate('change', { target: { value: '1000' } });

        expect(onChangeMock).toHaveBeenCalled();
        expect(value).toBe(1000);
        expect(rawValue).toBe('1000');
    });

    it('should invoke innerRef', () => {
        let inputElem = null;
        const refFnMock = jest.fn((input) => inputElem = input);
        mount(<NumberInput name='test' innerRef={refFnMock} />);
        expect(refFnMock).toHaveBeenCalled();
        expect(inputElem.tagName).toBe('INPUT');
    });

    it('should render label', () => {
        expect(
            mount(<NumberInput name='test' label='test-label' />)
                .find(Label)
                .text()
        ).toBe('test-label');
    });

    it('should be disabled', () => {
        expect(
            mount(<NumberInput name='test' disabled />)
                .find('input[name="test"]').getDOMNode().disabled
        ).toEqual(true);
    });

    it('should render error message', () => {
        const error = 'Something went wrong';
        expect(
            mount(<NumberInput name='test' error={error} />).find('div').contains(error)
        ).toBe(true);
    });

    it('should render error from function', () => {
        const errorMock = jest.fn((fieldName) => `error.${fieldName}`);
        const wrapper = mount(<NumberInput name='test' error={errorMock} />);
        expect(errorMock).toHaveBeenCalledWith('test');
        expect(wrapper.find('div').contains('error.test')).toBe(true);
    });

    it('should render hint message', () => {
        const hint = 'Something went wrong';
        expect(
            mount(<NumberInput name='test' hint={hint} />).find(Hint).text()
        ).toContain(hint);
    });
});

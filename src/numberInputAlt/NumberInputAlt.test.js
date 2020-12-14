import React from 'react';
import { mount } from 'enzyme';
import { Label } from '../label';
import { Hint } from '../hint';
import { NumberInputAlt } from './index';


describe('Test NumberInputAlt component', () => {

    it('should render', () => {
        expect(
            mount(<NumberInputAlt name='test' />)
                .find('input[name="test"]')
                .exists()
        ).toBe(true);
    });

    it('should invoke onChange', () => {
        let value;
        // let rawValue;
        const onChangeMock = jest.fn((val) => {
            value = val;
        });
        const wrapper = mount(<NumberInputAlt name='test' onChange={onChangeMock} />);
        wrapper.find('input')
            .simulate('change', { target: { value: '1000', focus: () => {} } });

        expect(onChangeMock).toHaveBeenCalled();
        expect(value).toBe(1000);
    });

    it('should render label', () => {
        expect(
            mount(<NumberInputAlt name='test' label='test-label' />)
                .find(Label)
                .text()
        ).toBe('test-label');
    });

    it('should be disabled', () => {
        expect(
            mount(<NumberInputAlt name='test' disabled />)
                .find('input[name="test"]').getDOMNode().disabled
        ).toEqual(true);
    });

    it('should render error message', () => {
        const error = 'Something went wrong';
        expect(
            mount(<NumberInputAlt name='test' error={error} />).find('div').contains(error)
        ).toBe(true);
    });

    it('should render error from function', () => {
        const errorMock = jest.fn((fieldName) => `error.${fieldName}`);
        const wrapper = mount(<NumberInputAlt name='test' error={errorMock} />);
        expect(errorMock).toHaveBeenCalledWith('test');
        expect(wrapper.find('div').contains('error.test')).toBe(true);
    });

    it('should render hint message', () => {
        const hint = 'Something went wrong';
        expect(
            mount(<NumberInputAlt name='test' hint={hint} />).find(Hint).text()
        ).toContain(hint);
    });
});

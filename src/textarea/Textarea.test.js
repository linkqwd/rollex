import React from 'react';
import { mount } from 'enzyme';
import { Label } from '../label';
import { Hint } from '../hint';
import { Textarea } from './index';


describe('Test Textarea component', () => {
    it('should render', () => {
        expect(
            mount(<Textarea name='test' />)
                .find('textarea[name="test"]')
                .exists()
        ).toBe(true);
    });

    it('should invoke onChange', () => {
        const onChangeMock = jest.fn();
        mount(<Textarea name='test' onChange={onChangeMock} />)
            .find('textarea[name="test"]')
            .simulate('change', { target: { value: 'abc' } });

        expect(onChangeMock).toHaveBeenCalled();
        // .calls[0][0] is the first argument of the first call to the function
        expect(onChangeMock.mock.calls[0][0]).toMatchObject({
            type: 'change',
            target: {
                value: 'abc',
            },
        });
    });

    it('should invoke innerRef', () => {
        let inputElem = null;
        const refFnMock = jest.fn((input) => inputElem = input);
        mount(<Textarea name='test' innerRef={refFnMock} />);
        expect(refFnMock).toHaveBeenCalled();
        expect(inputElem.tagName).toBe('TEXTAREA');
    });

    it('should render label', () => {
        expect(
            mount(<Textarea name='test' label='test-label' />)
                .find(Label)
                .text()
        ).toBe('test-label');
    });

    it('should be disabled', () => {
        expect(
            mount(<Textarea name='test' disabled />)
                .find('textarea[name="test"]').getDOMNode().disabled
        ).toEqual(true);
    });

    it('should render error message', () => {
        const error = 'Something went wrong';
        expect(
            mount(<Textarea name={'test'} error={error} />).find('div').contains(error)
        ).toBe(true);
    });

    it('should render error from function', () => {
        const errorMock = jest.fn((fieldName) => `error.${fieldName}`);
        const wrapper = mount(<Textarea name='test' error={errorMock} />);
        expect(errorMock).toHaveBeenCalledWith('test');
        expect(wrapper.find('div').contains('error.test')).toBe(true);
    });

    it('should render hint message', () => {
        const hint = 'Something went wrong';
        expect(
            mount(<Textarea name='test' hint={hint} />).find(Hint).text()
        ).toContain(hint);
    });
});

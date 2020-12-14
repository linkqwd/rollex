import React from 'react';
import { mount } from 'enzyme';
import { LinearProgress } from './index';


describe('Test LinearProgress component', () => {
    it('should render', () => {
        const value = 42;
        const elem = mount(<LinearProgress value={value} />);
        expect(elem.find('div').exists()).toEqual(true);
        expect(elem.prop('value')).toEqual(value);
    });
});

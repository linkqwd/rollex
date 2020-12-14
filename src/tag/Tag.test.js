import React from 'react';
import { mount } from 'enzyme';

import { Tag } from './index';


describe('Test Tag component', () => {
    it('should render', () => {
        const item = {
            id: 1,
            text: 'Testing',
        };
        const renderer = (obj) => obj.text;
        const clazz = 'test-class';
        const wrapper = mount(<Tag contentRenderer={renderer} item={item} className={clazz} />);
        expect(wrapper.find('div').text()).toEqual(item.text);
        expect(wrapper.props().className).toEqual(clazz);
    });

    it('should invoke onClose', () => {
        const onCloseMock = jest.fn();
        const item = { id: 1, text: 'Testing' };
        const closeDataQa = 'selector';
        const wrapper = mount(
            <Tag
                onClose={onCloseMock}
                contentRenderer={obj => obj.text}
                item={item}
                closeDataQa={closeDataQa}
            />
        );
        const closeCtrl = wrapper.find(`[data-qa="${closeDataQa}"]`).first();
        closeCtrl.simulate('click');
        closeCtrl.simulate('click');
        expect(onCloseMock.mock.calls.length).toBe(2);
    });
});

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CloseThickIcon } from '../icons';
import { getTheme, radius, theme, normalText } from '../style';


// region: SUB-COMPONENTS

const Wrapper = styled.div`
    position: relative;
    display: inline-block;
    margin: ${props => (props.noIndent ? 0 : '0 15px 15px 0')};
    padding: 10px ${props => (props.onClose ? '30px' : '10px')} 10px 10px;
    border-radius: ${radius};
    color: ${props => getTheme(props).backgroundColor};
    background-color: ${props => getTheme(props).color};
    font-size: ${normalText};
    line-height: 1;
`;

const Close = styled(CloseThickIcon)`
    position: absolute;
    top: 50%;
    right: 5px;
    width: 10px;
    height: 10px;
    padding: 5px;
    opacity: 0.6;
    transition: opacity .1s linear;
    transform: translateY(-50%);
    color: ${props => getTheme(props).backgroundColor};
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`;

const identity = item => item;

// endregion: SUB-COMPONENTS


// Usage:
/*
    import React from 'react';
    import { Tag } from 'zk-ui';

    <Tag
        theme='lightBlue'
        item={{ id: 1, name: 'Mr. Anderson' }}
        contentRenderer={(obj) => obj.name}
        onClose={(obj) => log(`${obj.name} (ID: ${obj.id})`)}
    />

 */
export const Tag = ({ theme, item, contentRenderer, onClose, closeDataQa, closeDataAtid, ...rest }) => (
    <Wrapper theme={theme} {...rest} onClose={onClose}>
        {contentRenderer(item)}

        {
            onClose &&
            <Close
                theme={theme}
                onClick={() => onClose(item)}
                data-qa={closeDataQa}
                data-atid={closeDataAtid}
            />
        }
    </Wrapper>
);

Tag.defaultProps = {
    contentRenderer: identity,
};

Tag.propTypes = {
    /** The tag theme, grey by default.
     * Could be one of (grey | green | red | orange | lightBlue)
     */
    theme: PropTypes.oneOf(Object.keys(theme)),

    /** Data object that will be used in
     * contentRenderer function.
     */
    item: PropTypes.any,

    /** Function that used to render tag content
     * (signature: (item) => PropTypes.node).
     */
    contentRenderer: PropTypes.func,

    /** Function that fired when user click
     * tag's close element (signature: (item) => any).
     */
    onClose: PropTypes.func,

    /** Use selector `[data-qa="${closeDataQa}"]`
     * to get DOM node.
     */
    closeDataQa: PropTypes.string,

    /** Selector for Prozorro auto-testing purposes */
    closeDataAtid: PropTypes.string,

    /* Remove margin */
    noIndent: PropTypes.bool,
};

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { blackColor, linkColor, normalText, greenColor } from '../style';


const Text = styled.span`
    ${({ pseudo }) => pseudo && css`
        border-bottom: 1px dotted;
    `}
`;

const WrapButton = styled.button.attrs(props => ({
    type: 'button',
    'data-qa': props.dataQa,
}))`
    display: inline-flex;
    border: 0 none;
    background: none;
    font-size: ${normalText};
    align-items: center;
    cursor: pointer;
    padding: 0;
    color: ${blackColor};

    &:focus ${Text},
    &:hover ${Text} {
        border-bottom-color: transparent;
        color: ${blackColor};
    }

    &:focus {
        outline: none;
    }

    &:hover svg {
        color: ${greenColor};
    }
`;

const WrapLink = styled.a.attrs((props) => {
    const attrs = {
        'data-qa': props.dataQa,
    };
    if (props.target === '_blank') attrs.rel = 'noopener noreferrer';
    return attrs;
})`
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    font-size: ${normalText};
    text-decoration: none;
    color: ${linkColor};

    &:focus ${Text},
    &:hover ${Text} {
        text-decoration: underline;
        color: ${linkColor};
    }

    &:hover svg {
        color: ${greenColor};
    }
`;

const BeforeWrap = styled.span`
    margin-right: 10px;
`;


const LinkComponent = ({ before, children, pseudo, ...rest }) => {
    const Wrap = pseudo ? WrapButton : WrapLink;
    return (
        <Wrap {...rest}>
            {before && (
                <BeforeWrap>
                    {before}
                </BeforeWrap>
            )}
            <Text pseudo={pseudo}>
                {children}
            </Text>
        </Wrap>
    );
};

LinkComponent.propTypes = {
    /** Children react nodes. */
    children: PropTypes.node.isRequired,

    /** If true link changes its style to pseudo-link. */
    pseudo: PropTypes.bool,

    /** Callback fired on link click (event => any). */
    onClick: PropTypes.func,

    /** Use selector `[data-qa="${dataQa}"]` to get DOM node. */
    dataQa: PropTypes.string,
};

LinkComponent.defaultProps = {
    pseudo: false,
};

export const Link = styled(LinkComponent)``; // need to have opportunity styling as styled-component

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { redColor } from '../style';


const Wrapper = styled.label`
    display: block;
    margin-bottom: 7px;
    font-size: 13px;
    font-weight: bold;
    word-break: break-all;

    ${props => props.required && css`
        &:after {
            content: "*";
            color: ${redColor};
            margin-left: 6px;
        }
    `}
`;

export const Label = ({ children, required, htmlFor }) => (
    children ?
        <Wrapper htmlFor={htmlFor} required={required}>{children}</Wrapper>
        : null
);

Label.propTypes = {
    children: PropTypes.node,
    required: PropTypes.bool,
    htmlFor: PropTypes.string,
};

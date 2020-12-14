import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { getTheme, theme, radius, whiteColor, normalText } from '../style';


export const ButtonBase = styled.button`
    position: relative;
    display: inline-block;
    padding: 0 20px;
    margin-right: ${props => props.rightIndent ? '30px' : 0};
    margin-bottom: ${props => props.bottomIndent ? '30px' : 0};
    width: ${props => props.fullWidth ? '100%' : 'auto'};
    background-color: ${props => props.primary ? getTheme(props).backgroundColor : whiteColor};
    border: 1px solid ${props => getTheme(props).borderColor};
    color: ${props => props.primary ? whiteColor : getTheme(props).backgroundColor};
    border-radius: ${radius};
    text-align: center;
    outline: none;
    white-space: nowrap;
    cursor: pointer;
    font-size: ${normalText};
    line-height: 38px;
    vertical-align: middle;
    transition: all 0.2s linear;
    text-decoration: none;
    box-sizing: border-box;

    &:hover {
        text-decoration: none;
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
        ${props => props.primary &&
            css`background-color: ${p => getTheme(p).backgroundColorLighten};`
        };
        color: ${props => props.primary ? whiteColor : getTheme(props).backgroundColor};
    }

    &:active {
        ${props => props.primary ?
            css`background-color: ${p => getTheme(p).backgroundColorDarken};`
            :
            css`background-color: ${p => getTheme(p).color};`
        };
    }

    &[disabled] {
        background-color: #eff1f2;
        color: #b3bcc7;
        border-color: ${props => props.primary ? 'transparent' : '#e5e5e5'};
        cursor: default;

        &:hover {
            text-decoration: none;
            background-color: #eff1f2;
            border-color: ${props => props.primary ? 'transparent' : '#e5e5e5'};
            box-shadow: none;
        }
    }
`;

export const Button = ({ children, dataQa, ...rest }) => (
    <ButtonBase type='button' data-qa={dataQa} {...rest}>
        {children}
    </ButtonBase>
);


Button.propTypes = {
    children: PropTypes.node,
    /** selector for QA needs */
    dataQa: PropTypes.string,
    disabled: PropTypes.bool,
    /** use primary theme */
    primary: PropTypes.bool,
    /** add 100% width */
    fullWidth: PropTypes.bool,
    /** add 30px margin to right */
    rightIndent: PropTypes.bool,
    /** add 30px margin to bottom */
    bottomIndent: PropTypes.bool,
    theme: PropTypes.oneOf(Object.keys(theme)),
    onClick: PropTypes.func,
};

Button.defaultProps = {
    disabled: false,
    fullWidth: false,
    rightIndent: false,
    bottomIndent: false,
    primary: false,
};

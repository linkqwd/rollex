import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Error } from '../error';
import { redColor, darkGreyColor, blackColor, whiteColor, bgGreen, borderColor } from '../style';
import { eventProxy } from '../selectionFields/utils';


// region: SUB-COMPONENTS

const Label = styled.label.attrs(props => ({ 'data-qa': props.dataQa }))`
    position: relative;
    display: flex;
    align-items: center;
    cursor: ${({ disabled }) => !disabled && 'pointer' || 'default' };
    color: ${({ disabled }) => disabled && darkGreyColor || blackColor };

    ${({ required }) => required && css`
        &:after {
            content: "*";
            color: ${redColor};
            margin-left: 5px;
            font-weight: bold;
            font-size: 13px;
        }`
    }
`;

const Input = styled.input`
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    cursor: ${({ disabled }) => disabled && 'default' || 'pointer' };

    ${({ type }) => {
        if (type === 'radio') {
            return css`
                &:checked + ${RadioIcon} {
                    &:before {
                        border-color: ${({disabled}) => disabled && '#dcdcdc' || bgGreen };
                    }

                    &:after {
                        background-color: ${({disabled}) => disabled && '#b2b4bc' || bgGreen };
                    }
                }
            `
        } else {
            return css`
                &:checked + ${CheckboxIcon} {
                    &:before {
                        background-color: ${({disabled}) => disabled && '#f2f2f2' || bgGreen };
                        border-color: ${({disabled}) => disabled && '#dcdcdc' || bgGreen };
                    }

                    svg {
                        opacity: 1;
                        color: ${({disabled}) => disabled && '#b2b4bc' || whiteColor };
                    }
                }
            `
        }
    }}

`;

const TextWrapper = styled.span`
    flex-grow: 1;
    word-break: break-word;
    ${({ multiline }) => (!multiline && css`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `)}
`;

const CheckboxIcon = styled.span`
    position: relative;
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    margin-right: 5px;

    // styles for square
    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 12px;
        height: 12px;
        background-color: ${({ disabled }) => disabled && '#f2f2f2' || whiteColor };
        border: 1px solid ${({ disabled }) => disabled && '#dcdcdc' || borderColor };
        vertical-align: middle;
        border-radius: 2px;
        transition: all .2s linear;
    }

    // styles for check sign
    svg {
        // content: '';
        opacity: 0;
        position: absolute;
        width: 8px;
        height: 6px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`;

const RadioIcon = styled.span`
    position: relative;
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    margin-right: 5px;

    // styles for circle
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 12px;
        height: 12px;
        background-color: ${({ disabled }) => disabled && '#f2f2f2' || whiteColor };
        border: 1px solid ${({ disabled }) => disabled && '#dcdcdc' || borderColor };
        vertical-align: middle;
        border-radius: 50%;
    }

    // styles for inner cirlce
    &:after {
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${({ disabled }) => disabled && '#f2f2f2' || whiteColor };
        transition: background-color .2s linear;
    }
`;

export const Checkbox = (props) => {
    const {
        label, name, type, checked, onChange,
        error, disabled, innerRef, multiline,
        errorDataQa, noEventProxy, title, dataQa,
        required, ...rest
    } = props;

    const labelMsg = (typeof label === 'function') ? label(checked) : label;
    const errorContent = (typeof error === 'function') ? error(name) : error;

    return (
        <React.Fragment>
            <Label required={required} dataQa={dataQa} disabled={disabled} title={title}>
                <Input
                    type={type}
                    name={name}
                    checked={checked}
                    onChange={(e) => onChange && onChange(noEventProxy ? e : eventProxy(e))}
                    disabled={disabled}
                    ref={innerRef}
                    {...rest}
                />
                {type === 'radio' ?
                    <RadioIcon/>
                    :
                    <CheckboxIcon>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 6'>
                            <path style={{ fill: 'currentColor' }} d='M2.81 5.68L0 2.6l1.48-1.35L3 2.92 6.47 0l1.29 1.53-4.95 4.15z' />
                        </svg>
                    </CheckboxIcon>
                }
                <TextWrapper multiline={multiline}>
                    {labelMsg}
                </TextWrapper>
            </Label>
            <Error dataQa={errorDataQa}>
                {errorContent}
            </Error>
        </React.Fragment>
    );
};

Checkbox.propTypes = {
    /** Label added near checkbox. */
    label: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.string]),

    /** Input name. */
    name: PropTypes.string,

    /** Visually required field. */
    required: PropTypes.bool,

    /** If true checkbox is checked (use for with onChange prop, i.e. controlled input). */
    checked: PropTypes.bool,

    /** Function called when state of checkbox changed. (func: (event) => any) */
    onChange: PropTypes.func,

    /** Do not wrap event into event proxy object. */
    noEventProxy: PropTypes.bool,

    /** Disable input if true. */
    disabled: PropTypes.bool,

    /**
     * Error added below checkbox.
     * (func: (name) => errorString or react node)
     */
    error: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.array]),

    /** Use selector `[data-qa="${dataQa}"]` to get DOM node. */
    dataQa: PropTypes.string,

    /** Use selector `[data-qa="${errorDataQa}"]` to get DOM node. */
    errorDataQa: PropTypes.string,

    /**
     * React reference function.
     * See: https://reactjs.org/docs/refs-and-the-dom.html
     */
    innerRef: PropTypes.func,
    /** type of checkbox */
    type: PropTypes.string,
    /** type of checkbox */
    multiline: PropTypes.bool,
    /** title for <label> when hover */
    title: PropTypes.string,
};

Checkbox.defaultProps = {
    type: 'checkbox',
    multiline: false,
    required: false,
};

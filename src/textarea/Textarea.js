import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Error } from '../error';
import { Hint } from '../hint';
import { Label } from '../label';
import { bgGreen, borderColor, disabledBg, disabledFg, whiteColor, errorColor } from '../style';
import { inputFontCss } from '../inputFields/base';


const TextareaWrapper = styled.textarea.attrs(props => ({
    'data-qa': props.dataQa,
}))`
    width: 100%;
    padding: 10px;
    outline: 0 none;
    border-radius: 3px;
    box-sizing: border-box;
    transition: border-color .1s linear;
    cursor: ${({ disabled }) => (disabled ? 'default' : 'text')};
    background-color: ${({ disabled }) => (disabled ? disabledBg : whiteColor)};
    color: ${({ disabled }) => (disabled ? disabledFg : 'inherit')};
    border: 1px solid ${({ error }) => (error ? errorColor : borderColor)};
    resize: ${({ resize }) => resize};
    // remove inner shadow from input on iPhone
    -webkit-appearance: none;
    font: ${inputFontCss};

    &:focus {
        border-color: ${bgGreen};
    }
`;

export const Textarea = (props) => {
    const {
        required, label, name, disabled, innerRef, autoComplete, dataQa, error, errorDataQa, hint,
        ...rest
    } = props;
    const errorContent = (typeof error === 'function') ? error(name) : error;

    return (
        <Fragment>
            <Label required={required}>{label}</Label>
            <TextareaWrapper
                error={Boolean(errorContent)}
                disabled={disabled}
                ref={innerRef}
                name={name}
                dataQa={dataQa}
                autoComplete={autoComplete}
                {...rest}
            />
            <Hint>{hint}</Hint>
            <Error dataQa={errorDataQa}>{errorContent}</Error>
        </Fragment>
    );
};

Textarea.defaultProps = {
    autoComplete: 'off',
    resize: 'vertical',
};

Textarea.propTypes = {
    /** If true add required marker near label. */
    required: PropTypes.bool,

    /** Label added above text area. */
    label: PropTypes.node,

    /** Text area name. */
    name: PropTypes.string,

    /** Text area value. */
    value: PropTypes.string,

    /** Function called when text area changes its value. */
    onChange: PropTypes.func,

    /** If true disable field. */
    disabled: PropTypes.bool,

    /**
     * React reference function.
     * See: https://reactjs.org/docs/refs-and-the-dom.html
     */
    innerRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.object, // when use hook useRef
    ]),

    /** Hint added below text area. */
    hint: PropTypes.node,

    /**
     * Error added below text area.
     * (func: (name) => errorString or react node)
     */
    error: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.array]),

    /** Use selector `[data-qa="${dataQa}"]` to get DOM node. */
    dataQa: PropTypes.string,

    /** Use selector `[data-qa="${errorDataQa}"]` to get DOM node. */
    errorDataQa: PropTypes.string,
    resize: PropTypes.string,
};

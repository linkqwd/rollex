import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Error } from '../error';
import { Hint } from '../hint';
import { Label } from '../label';
import { InputWrapper, BeforeWrapper, AfterWrapper } from '../inputFields/base';


export class Input extends Component {
    static propTypes = {
        /** If true add required marker near label. */
        required: PropTypes.bool,

        /** If true remove border around input. */
        noBorder: PropTypes.bool,

        /** Label added above input. */
        label: PropTypes.node,

        /** Input name. */
        name: PropTypes.string,

        /** Input value. */
        value: PropTypes.string,

        /** Function called when input changes its value. */
        onChange: PropTypes.func,

        /** Input type (text, password, time, etc.). */
        type: PropTypes.string.isRequired,

        /** If true disable field. */
        disabled: PropTypes.bool,

        /**
         * React reference function.
         * See: https://reactjs.org/docs/refs-and-the-dom.html
         */
        innerRef: PropTypes.func,

        /** Component that would be rendered before the input. */
        before: PropTypes.node,

        /** Component that would be rendered after the input. */
        after: PropTypes.node,

        /** Hint added below input. */
        hint: PropTypes.node,

        /**
         * Error added below input.
         * (func: (name) => errorString or react node)
         */
        error: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.array]),

        /** Use selector `[data-qa="${dataQa}"]` to get DOM node. */
        dataQa: PropTypes.string,

        /** Use selector `[data-qa="${errorDataQa}"]` to get DOM node. */
        errorDataQa: PropTypes.string,

        autoComplete: PropTypes.string,
        className: PropTypes.string,
    };

    static defaultProps = {
        autoComplete: 'off',
    };

    inputRef = (input) => {
        this.input = input;

        const { innerRef } = this.props;
        if (innerRef) innerRef(input);
    };

    focusInput = () => {
        if (this.input && !this.input.disabled) this.input.focus();
    };

    render() {
        const {
            required, label, name, disabled, autoComplete,
            dataQa, error, errorDataQa, hint, before, after, noBorder, className,
            ...rest
        } = this.props;
        const errorContent = (typeof error === 'function') ? error(name) : error;

        return (
            <Fragment>
                <Label required={required}>{label}</Label>
                <InputWrapper
                    error={Boolean(errorContent)}
                    disabled={disabled}
                    onClick={this.focusInput}
                    noBorder={noBorder}
                    className={className}
                >
                    {before && <BeforeWrapper>{before}</BeforeWrapper>}
                    <input
                        disabled={disabled}
                        ref={this.inputRef}
                        name={name}
                        data-qa={dataQa}
                        autoComplete={autoComplete}
                        {...rest}
                    />
                    {after && <AfterWrapper>{after}</AfterWrapper>}
                </InputWrapper>
                <Hint>{hint}</Hint>
                <Error dataQa={errorDataQa}>{errorContent}</Error>
            </Fragment>
        );
    }
}

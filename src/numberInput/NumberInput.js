import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Cleave from 'cleave.js/react';

import { Error } from '../error';
import { Hint } from '../hint';
import { Label } from '../label';
import { AfterWrapper, BeforeWrapper, InputWrapper } from '../inputFields/base';


const targetProxyHandler = {
    get(obj, prop) {
        return prop === 'value' ?
            Number(obj.rawValue === '' ? Number.NaN : obj.rawValue) :
            obj[prop];
    }
};

const eventProxyHandler = {
    get(obj, prop) {
        return prop === 'target' ? new Proxy(obj.target, targetProxyHandler) : obj[prop];
    }
};

const eventProxy = (e) => new Proxy(e, eventProxyHandler);


// TODO: fix bug with cursor position.

export class NumberInput extends Component {
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
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /** Function called when input changes its value. */
        onChange: PropTypes.func,

        /** Do not wrap event into event proxy object. */
        noEventProxy: PropTypes.bool,

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
    };

    state = {
        updCleave: null,
    };

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this.state.updCleave.setRawValue(this.props.value);
        }
    }

    inputRef = (input) => {
        this.input = input;

        const { innerRef } = this.props;
        if (innerRef) innerRef(input);
    };

    focusInput = () => {
        if (this.input && !this.input.disabled) this.input.focus();
    };

    onInit = (cleave) => {
        this.setState({ updCleave: cleave });
    };

    render() {
        const {
            required, label, error, name, disabled, dataQa, errorDataQa,
            autoComplete = 'off', hint, before, after,
            options: { ...cleaveOpts } = {},
            onChange,
            noEventProxy,
            noBorder,
            innerRef, // ignored, used in this.inputRef()
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
                >
                    {before && <BeforeWrapper>{before}</BeforeWrapper>}
                    <Cleave
                        disabled={disabled}
                        options={{
                            numeral: true,
                            numeralThousandsGroupStyle: 'thousand',
                            numeralDecimalScale: 0,
                            delimiter: ' ',
                            ...cleaveOpts,
                        }}
                        onInit={this.onInit}
                        htmlRef={this.inputRef}
                        name={name}
                        autoComplete={autoComplete}
                        onChange={e => onChange && onChange(noEventProxy ? e : eventProxy(e))}
                        data-qa={dataQa}
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

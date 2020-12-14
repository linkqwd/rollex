import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Picker, {
    registerLocale,
    // setDefaultLocale,
} from 'react-datepicker';

import ru from 'date-fns/locale/ru';
import uk from 'date-fns/locale/uk';
import en from 'date-fns/locale/en-US';

registerLocale('uk', uk);
registerLocale('en', en);
registerLocale('ru', ru);

import './style.css';

import { Error } from '../error';
import { Hint } from '../hint';
import { Label } from '../label';
import { AfterWrapper, BeforeWrapper, InputWrapper } from '../inputFields/base';


// region: SUB-COMPONENTS

class CustomInput extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    focusInput = () => {
        if (this.input && !this.input.current.disabled) this.input.current.focus();
    };

    render() {
        const { disabled, before, after, error, ...restProps } = this.props;
        return (
            <InputWrapper
                error={Boolean(error)}
                disabled={disabled}
                onClick={this.focusInput}
            >
                {before && <BeforeWrapper>{before}</BeforeWrapper>}
                <input ref={this.inputRef} disabled={disabled} {...restProps} />
                {after && <AfterWrapper>{after}</AfterWrapper>}
            </InputWrapper>
        );
    }
}

// endregion: SUB-COMPONENTS

// Usage:
/*
    import React from 'react';
    import { registerLocale } from 'react-datepicker';
    import ru from 'date-fns/locale/ru';
    import { DatePicker } from 'zk-ui';
    import { CalendarIcon, FormField } from 'zk-ui/icons';

    registerLocale('ru', ru);

    class DatePickerExample extends React.Component {
        state = { selected: new Date() };
        change = (selected) => this.setState({ selected });
        render() {
            return (
                <DatePicker
                    before={<CalendarIcon />}
                    selected={this.state.selected}
                    onChange={this.change}
                    showTimeSelect
                    timeFormat='HH:mm'
                    timeIntervals={15}
                    dateFormat='dd.MM.yyyy HH:mm'
                    timeCaption='time'
                    locale='ru'
                    fixedHeight
                />
            );
        }
    }
 */

// See: https://reactdatepicker.com/
// for complete list of props.
export class DatePicker extends Component {
    static propTypes = {
        /** If true add required marker near label. */
        required: PropTypes.bool,

        /** Label added above date picker. */
        label: PropTypes.node,

        /** Input name. */
        name: PropTypes.string,

        /** Input value. */
        value: PropTypes.object,

        /** Function called when input changes its value. */
        onChangeRaw: PropTypes.func,

        /** Function called when user pick some date or time changes its value. */
        onChange: PropTypes.func,

        /** If true disable field. */
        disabled: PropTypes.bool,

        /** Component that would be rendered before the input. */
        before: PropTypes.node,

        /** Component that would be rendered after the input. */
        after: PropTypes.node,

        /** Hint added below input. */
        hint: PropTypes.node,

        /** Error added below input. */
        error: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.array]),

        /** Use selector `[data-qa="${dataQa}"]` to get DOM node. */
        dataQa: PropTypes.string,

        /** Use selector `[data-qa="${errorDataQa}"]` to get DOM node. */
        errorDataQa: PropTypes.string,
        autoComplete: PropTypes.string,
        dateFormat: PropTypes.string,
        locale: PropTypes.string,

        /** Selector for Prozorro auto-testing purposes */
        dataAtid: PropTypes.string,
    };

    static defaultProps = {
        autoComplete: 'off',
        locale: 'ru',
    };

    defaultOnChangeRaw = (e) => {
        this.props.onChange(e.target.value);
    };

    render() {
        const {
            required, label, error, name, disabled, dataQa, errorDataQa, dataAtid,
            autoComplete, hint, before, after, onChangeRaw, onChange, dateFormat,
            ...rest
        } = this.props;

        const errorContent = (typeof error === 'function')
            ? error(name) : error;

        return (
            <Fragment>
                <Label required={required}>{label}</Label>
                <Picker
                    customInput={
                        <CustomInput
                            error={errorContent}
                            before={before}
                            after={after}
                            disabled={disabled}
                            data-qa={dataQa}
                            data-atid={dataAtid}
                        />
                    }
                    disabled={disabled}
                    name={name}
                    autoComplete={autoComplete}
                    // onChangeRaw={onChangeRaw || this.defaultOnChangeRaw}
                    onChange={onChange}
                    dateFormat={dateFormat}
                    {...rest}
                />
                <Hint>{hint}</Hint>
                <Error dataQa={errorDataQa}>{errorContent}</Error>
            </Fragment>
        );
    }
}

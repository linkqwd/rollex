import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Label, Error, Hint, RadioButton } from '../index';


const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.horizontal && 'row' || 'column'};
`;

const RadioButtonWrapper = styled.div`
    margin-bottom: 8px;
    margin-right: 16px;
`;

export class RadioGroup extends Component {
    static propTypes = {
        /** Label added before the group of radio buttons. */
        label: PropTypes.node,

        /** If true add required marker near label. */
        required: PropTypes.bool,

        /** Radio button options. */
        options: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            dataQa: PropTypes.string,
            disabled: PropTypes.bool,   // you can disable particular radio button
        })),

        /** Name of input field. */
        name: PropTypes.string,

        /** Value of the radio button which should be checked. */
        checked: PropTypes.string,

        /** If true set horizontal layout of radio buttons. */
        horizontal: PropTypes.bool,

        /** If true disable all radio buttons. */
        disabled: PropTypes.bool,

        /**
         * Hint added below the group of radio buttons.
         * (func: (inputDomElem) => hintString  or react node)
         */
        hint: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

        /**
         * Error added below the group of radio buttons.
         * (func: (name) => errorString or react node)
         */
        error: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.array]),

        /** Use selector `[data-qa="${errorDataQa}"]` to get DOM node. */
        errorDataQa: PropTypes.string,
    };

    state = {
        selected: null,
    };

    componentDidMount() {
        const { name, error, hint, checked } = this.props;
        this.setState({ selected: checked });
    }

    select = (e) => {
        const { onChange } = this.props;

        this.setState({ selected: e.target.value });

        if (onChange) onChange(e);
    };

    render() {
        const {
            label, required, options, name,
            horizontal, disabled, errorDataQa,
            hint, error,    // ignored
        } = this.props;
        const { selected } = this.state;
        const hintMsg = (typeof hint === 'function') ? hint(selected) : hint;
        const errorContent = (typeof error === 'function') ? error(name) : error;

        return (
            <div>
                <Label required={required}>{label}</Label>
                <LayoutWrapper horizontal={horizontal}>
                    {options.map(
                        ({ label, value, ...rest }, idx) =>
                            <RadioButtonWrapper key={`${value}-${idx}`}>
                                <RadioButton
                                    name={name}
                                    label={label}
                                    value={value}
                                    disabled={disabled}
                                    checked={selected === value}
                                    onChange={this.select}
                                    {...rest}
                                />
                            </RadioButtonWrapper>
                    )}
                </LayoutWrapper>
                <Hint display='inline-block'>
                    {hintMsg}
                </Hint>
                <Error dataQa={errorDataQa} marginTop={0}>
                    {errorContent}
                </Error>
            </div>
        );
    }
}

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { greenColor, darkGreyColor } from '../style';
import { eventProxy } from '../selectionFields/utils';


const switcherWidth = 36;   // px
const switcherHeight = 20;  // px
const switcherColor = greenColor;


const Below = styled.span`
    position: absolute;
    top: ${switcherHeight / 8}px;
    display: inline-block;
    height: ${switcherHeight * 3 / 4}px;
    width: 100%;
    background-color: ${
    ({ checked, disabled }) => disabled ?
        '#bdbdbd'
        :
        (checked ? switcherColor : 'black')
    };
    border-radius: ${switcherHeight * 3 / 8}px;
    opacity: 0.4;
    vertical-align: middle;
`;

const Above = styled.span`
    position: absolute;
    top: 0;
    left: ${({ checked }) => checked && (switcherWidth - switcherHeight) || 0}px;
    display: inline-block;
    height: ${switcherHeight}px;
    width: ${switcherHeight}px;
    background-color: ${
    ({ checked, disabled }) => disabled ?
        '#bdbdbd'
        : (checked ? switcherColor : 'white')
    };
    border-radius: 50%;
    transition: all 0.2s ease-out;
    vertical-align: middle;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.16),0 3px 1px -2px rgba(0, 0, 0, 0.14);
`;

const Switcher = styled.span`
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: ${switcherWidth}px;
    height: ${switcherHeight}px;
`;

const TextWrapper = styled.div`
    display: inline-block;
    vertical-align: middle;
    padding-left: 6px;
`;

const Input = styled.input.attrs( props => ({
    'data-qa': props.dataQa,
}))`
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: ${({ disabled }) => !disabled && 'pointer' || 'default' };
`;

const Label = styled.label`
    cursor: ${({ disabled }) => !disabled && 'pointer' || 'default' };
    color: ${({ disabled }) => disabled && darkGreyColor || 'inherit' };
`;

export const Switch = (props) => {
    const {
        label, name, checked, onChange,
        disabled, innerRef, dataQa,
        ...rest
    } = props;

    const labelMsg = (typeof label === 'function') ? label(checked) : label;

    return (
        <Label disabled={disabled}>
            <Switcher>
                <Below checked={checked} disabled={disabled} />
                <Above checked={checked} disabled={disabled} />
                <Input
                    type='checkbox'
                    name={name}
                    checked={checked}
                    onChange={(e) => onChange && onChange(eventProxy(e))}
                    disabled={disabled}
                    ref={innerRef}
                    data-qa={dataQa}
                    {...rest}
                />
            </Switcher>
            <TextWrapper disabled={disabled}>
                {labelMsg}
            </TextWrapper>
        </Label>
    );
};

Switch.propTypes = {
    /**
     * Label added near switch.
     * React node or function: (isChecked) => labelString
     */
    label: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

    /** Input name. */
    name: PropTypes.string,

    /** Disable the switch if true. */
    disabled: PropTypes.bool,

    /** If true the switch is on. */
    checked: PropTypes.bool.isRequired,

    /** Callback fired when the switch change status: (event) => any. */
    onChange: PropTypes.func.isRequired,

    /** Use selector `[data-qa="${dataQa}"]` to get DOM node. */
    dataQa: PropTypes.string,

    /**
     * React reference function.
     * See: https://reactjs.org/docs/refs-and-the-dom.html
     */
    innerRef: PropTypes.func,
};

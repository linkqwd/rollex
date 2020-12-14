import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { Input } from '../input';

// hint, error, after, before etc. passes to <Input>
export const NumberInputAlt = ({
    onChange, decimalScale, decimalAmount, allowNegative, customInput,
    thousandSeparator, allowedDecimalSeparators, ...props
}) => {
    return (
        <NumberFormat
            {...props}
            decimalScale={decimalScale ? decimalAmount : 0}
            customInput={customInput}
            onValueChange={value => onChange(value.floatValue)}
            thousandSeparator={thousandSeparator}
            allowNegative={allowNegative}
            allowedDecimalSeparators={allowedDecimalSeparators}
        />
    );
};

NumberInputAlt.defaultProps = {
    onChange: () => {},
    decimalScale: false,
    decimalAmount: 2,
    allowNegative: false,
    thousandSeparator: ' ',
    allowedDecimalSeparators: [',', '.'],
    customInput: Input,
};

NumberInputAlt.propTypes = {
    onChange: PropTypes.func.isRequired,
    decimalScale: PropTypes.bool,
    decimalAmount: PropTypes.number,
    allowNegative: PropTypes.bool,
    thousandSeparator: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    allowedDecimalSeparators: PropTypes.arrayOf(PropTypes.string),
    customInput: PropTypes.elementType,
};

import React from 'react';
import PropTypes from 'prop-types';
import { ButtonBase } from './Button';
import { theme } from '../style';

export const LinkButton = ({ children, href, disabled, dataQa, ...rest }) => (
    <ButtonBase
        as='a'
        href={disabled ? null : href}
        data-qa={dataQa}
        disabled={disabled}
        {...rest}
    >
        {children}
    </ButtonBase>
);

LinkButton.propTypes = {
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
    href: PropTypes.string,
};

LinkButton.defaultProps = {
    disabled: false,
    fullWidth: false,
    rightIndent: false,
    bottomIndent: false,
    primary: false,
};

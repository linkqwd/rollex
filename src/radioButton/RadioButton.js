import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox } from '../index';

export const RadioButton = (props) => (
    <Checkbox
        type='radio'
        noEventProxy
        {...props}
    />
);

RadioButton.propTypes = {
    /** Label added near radio button. */
    label: PropTypes.node,

    /** Radio button name. */
    name: PropTypes.string,

    /** Disable radio button if true. */
    disabled: PropTypes.bool,

    /** If true radio button is checked (use for with onChange prop, i.e. controlled input). */
    checked: PropTypes.bool,

    /** If true radio button is checked. */
    defaultChecked: PropTypes.bool,

    /** Use selector `[data-qa="${dataQa}"]` to get DOM node. */
    dataQa: PropTypes.string,

    /**
     * React reference function.
     * See: https://reactjs.org/docs/refs-and-the-dom.html
     */
    innerRef: PropTypes.func,
};

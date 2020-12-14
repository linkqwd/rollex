import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '../tooltip';


export function TextLengthLimiter({ content, max, position, asTitle }) {
    const text = content || '';

    if (text.length <= max) {
        return <span>{text}</span>;
    }

    if (asTitle) {
        return <span title={text}>{`${text.substr(0, max - 3)}...`}</span>;
    }

    return (
        <Tooltip
            content={content}
            position={position}
        >
            {`${text.substr(0, max - 3)}...`}
        </Tooltip>
    );
}

TextLengthLimiter.propTypes = {
    content: PropTypes.string,
    /** maximum text length in characters */
    max: PropTypes.number.isRequired,
    asTitle: PropTypes.bool,
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
};

TextLengthLimiter.defaultProps = {
    max: 30,
};

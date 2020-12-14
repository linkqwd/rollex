import React from 'react';
import PropTypes from 'prop-types';
import { Svg } from '../svg';

// Usage:
/*
    import React from 'react';
    import { FileIcon } from 'zk-ui/icons';

    <FileIcon ext='png' size='medium' />
 */

export const FileIcon = ({ ext, dataQa, ...rest } = {}) => (
    <Svg viewBox='0 0 96 96' {...rest}>
        <path
            d='M60,0H20C13.373,0,8,5.373,8,12v72c0,6.627,5.373,12,12,12h55.875C82.502,96,88,90.627,88,84V28C84,24,66,6,60,0z   M60,11.178L76.709,28H60V11.178z M75.875,88H20c-2.206,0-4-1.794-4-4V12c0-2.206,1.794-4,4-4h32v20v8h8h20v48  C80,86.168,78.111,88,75.875,88z'
        />
        <text
            x='50%'
            y='70%'
            fontWeight='bold'
            fontFamily='sans-serif'
            fontSize='22'
            textAnchor='middle'
            alignmentBaseline='central'
            data-qa={dataQa}
        >
            {ext}
        </text>
    </Svg>
);

FileIcon.propTypes = {
    // File extension (e.g. pdf, png, jpeg).
    ext: PropTypes.string,

    // You can get text dom element with selector
    //  document.querySelectorAll(`[data-qa='${dataQaValue}']`)
    dataQa: PropTypes.string,
};

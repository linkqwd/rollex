import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { blueBgColor, orangeColor, redColor, greenColor } from '../style';


// Size in pixels.
const size = {
    extraLarge: [140, 140],
    large: [70, 70],
    medium: [32, 32],
    small: [20, 20],  // default size
    extraSmall: [12, 12],
};

const getSize = (props) => {
    const sizePreset = size[props.size];
    if (sizePreset) {
        const [width, height] = sizePreset;
        return css`
            width: ${width}px;
            height: ${height}px;
        `;
    }

    return css`
        width: ${props.width || '20px'};
        height: ${props.height || '20px'};
    `;
};

const getMargin = (props) => {
    const { margin, marginRight } = props;
    if (margin) {
        return css`margin: ${margin}`;
    } else if (marginRight) {
        return css`margin-right: ${marginRight}`;
    }
    return '';
};

const theme = {
    // grey by default

    green: css`
        color: ${greenColor};
    `,

    red: css`
        color: ${redColor};
    `,

    orange: css`
        color: ${orangeColor};
    `,

    lightBlue: css`
        color: ${blueBgColor};
    `,
};

/** @component */
export const Svg = styled.svg.attrs({
    xmlns: 'http://www.w3.org/2000/svg',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`
    display: inline-block;
    fill: currentColor;
    vertical-align: middle;

    ${props => theme[props.theme] || (props.color ? css`color: ${props.color}` : false)};
    ${props => getMargin(props)};
    ${props => getSize(props)};
    ${props => props.hover && css`cursor: pointer;`};
`;

Svg.propTypes = {
    theme: PropTypes.oneOf(Object.keys(theme)),
    size: PropTypes.oneOf(Object.keys(size)),
    hover: PropTypes.bool,
    color: PropTypes.string,
    marginRight: PropTypes.string,
    margin: PropTypes.string,
};

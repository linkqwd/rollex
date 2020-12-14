import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import { bgGreen } from '../style/index';


const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;


const Base = styled.div`
    display: inline-block;
    vertical-align: middle;
    border-radius: 50%;
    border: solid ${({ color }) => color || bgGreen};
    animation: ${rotation} 1.1s infinite linear;
    border-left-color: rgba(34, 177, 76, 0.3);

    ${({ margin }) => margin && css`
        margin: ${margin};
    `};
    ${({ marginRight }) => marginRight && css`
        margin-right: ${marginRight};
    `};
    ${({ marginLeft }) => marginLeft && css`
        margin-left: ${marginLeft};
    `};
`;


const Small = styled(Base)`
    width: 14px;
    height: 14px;
    border-width: 2px;
`;


const Medium = styled(Base)`
    width: 30px;
    height: 30px;
    border-width: 4px;
`;


const Large = styled(Base)`
    width: 60px;
    height: 60px;
    border-width: 8px;
`;


const ExtraLarge = styled(Base)`
    width: 120px;
    height: 120px;
    border-width: 14px;
`;


// Size enum
const EXTRA_LARGE = 'extraLarge';
const LARGE = 'large';
const MEDIUM = 'medium';
const SMALL = 'small';

export function Spinner(props) {
    const { size, dataQa, ...rest } = props;
    switch (size) {
        case EXTRA_LARGE:
            return <ExtraLarge data-qa={dataQa} {...rest} />;
        case LARGE:
            return <Large data-qa={dataQa} {...rest} />;
        case MEDIUM:
            return <Medium data-qa={dataQa} {...rest} />;
        case SMALL:
            return <Small data-qa={dataQa} {...rest} />;
        default:
            return <Medium data-qa={dataQa} {...rest} />;
    }
}

Spinner.propTypes = {
    size: PropTypes.oneOf([EXTRA_LARGE, LARGE, MEDIUM, SMALL]),
    dataQa: PropTypes.string,
    margin: PropTypes.string,
    marginRight: PropTypes.string,
    marginLeft: PropTypes.string,
    color: PropTypes.string,
};

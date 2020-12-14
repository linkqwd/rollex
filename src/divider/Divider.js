import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getTheme, theme } from '../style';


/** @component */
export const Divider = styled.div`
    display: block;
    height: ${({ height }) => height};
    margin: ${({ margin }) => margin};
    background-color: ${props => getTheme(props).backgroundColor};
`;


Divider.propTypes = {
    theme: PropTypes.oneOf(Object.keys(theme)),
    height: PropTypes.string,
    margin: PropTypes.string,
};

Divider.defaultProps = {
    theme: 'grey',
    height: '2px',
    margin: '10px 0',
};

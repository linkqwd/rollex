import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { radius, smallTitle } from '../style';


/** @component */
export const CardHeader = styled.div`
    padding: 25px 20px;
    font-size: ${smallTitle};
    font-weight: bold;
    border-radius: ${radius} ${radius} 0 0;
    color: ${({ color }) => color};
    background-color: ${({ backgroundColor }) => backgroundColor};
    ${({ wordBreakAll }) => wordBreakAll && css`
        word-break: break-all;
    `}
`;

CardHeader.propTypes = {
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    wordBreakAll: PropTypes.bool,
};

CardHeader.defaultProps = {
    color: '#456379',
    backgroundColor: '#f4f7fa',
    wordBreakAll: false,
};

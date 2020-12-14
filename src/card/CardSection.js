import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { radius } from '../style';


/** @component */
export const CardSection = styled.div`
    padding: 20px;
    border-radius: 0 0 ${radius} ${radius};
    ${({ backgroundColor }) => backgroundColor && css`
        background-color: ${backgroundColor};
    `}
    ${({ wordBreakAll }) => wordBreakAll && css`
        word-break: break-all;
    `}
`;

CardSection.propTypes = {
    backgroundColor: PropTypes.string,
    wordBreakAll: PropTypes.bool,
};

CardSection.defaultProps = {
    wordBreakAll: false,
};

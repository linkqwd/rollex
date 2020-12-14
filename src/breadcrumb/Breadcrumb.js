import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darkGreyColor } from '../style';


/** @component */
export const Breadcrumb = styled.div`
    font-size: 14px;

    a + a:before {
        margin: 0 4px;
        height: 15px;
        color: ${({ color }) => color};
        content: "${({ separator }) => separator}";
    }
`;

Breadcrumb.propTypes = {
    /** Children nodes. */
    children: PropTypes.arrayOf(PropTypes.node),

    /** Color of the link separators. */
    color: PropTypes.string,

    /** Separator element. */
    separator: PropTypes.string,
};

Breadcrumb.defaultProps = {
    separator: '›',
    color: darkGreyColor,
};

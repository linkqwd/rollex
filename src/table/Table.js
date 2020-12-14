import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


/** @component */
export const Table = styled.table`
    width: 100%;
    table-layout: ${({ adaptiveColumns }) => (
        adaptiveColumns ? 'auto' : 'fixed'
    )}; 
    white-space: ${({ adaptiveColumns }) => (
        adaptiveColumns ? 'nowrap' : 'normal'
    )};
    border-collapse: collapse;
    border-spacing: 0;
`;

Table.propTypes = {
    children: PropTypes.node.isRequired,
    adaptiveColumns: PropTypes.bool,
};

Table.defaultProps = {
    /** Determine table columns width by their content; NOTE: white-space: nowrap is used */
    adaptiveColumns: false,
};

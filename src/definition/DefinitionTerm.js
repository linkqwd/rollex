import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


/** @component */
export const DefinitionTerm = styled.div.attrs(({ dataQa }) => ({
    'data-qa': dataQa,
}))`
    margin-bottom: 3px;
    font-weight: bold;
`;

DefinitionTerm.propTypes = {
    /** selector for QA needs */
    dataQa: PropTypes.string,
    children: PropTypes.node.isRequired,
};

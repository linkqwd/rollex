import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


/** @component */
export const DefinitionValue = styled.div.attrs(({ dataQa }) => ({
    'data-qa': dataQa,
}))``;

DefinitionValue.propTypes = {
    /** selector for QA needs */
    dataQa: PropTypes.string,
    children: PropTypes.node.isRequired,
};

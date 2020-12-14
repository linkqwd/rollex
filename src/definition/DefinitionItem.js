import styled from 'styled-components';
import PropTypes from 'prop-types';


/** @component */
export const DefinitionItem = styled.li.attrs(({ dataQa }) => ({
    'data-qa': dataQa,
}))`
    margin-bottom: 19px;

    &:last-child {
        margin-bottom: 0;
    }
`;

DefinitionItem.propTypes = {
    /** selector for QA needs */
    dataQa: PropTypes.string,
    children: PropTypes.node.isRequired,
};

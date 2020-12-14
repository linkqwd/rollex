import PropTypes from 'prop-types';
import styled from 'styled-components';


/** @component */
export const Definition = styled.ul.attrs(({ dataQa }) => ({
    'data-qa': dataQa,
}))`
    display: block;
    padding: 0;
    margin: 0;
    list-style-type: none;
`;

Definition.propTypes = {
    /** selector for QA needs */
    dataQa: PropTypes.string,
    children: PropTypes.node.isRequired,
};

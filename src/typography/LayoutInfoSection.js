import PropTypes from 'prop-types';
import styled from 'styled-components';


/** @component */
export const LayoutInfoSection = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin: 2px 10px;
`;

LayoutInfoSection.propTypes = {
    children: PropTypes.node.isRequired,
};

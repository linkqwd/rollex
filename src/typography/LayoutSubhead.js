import styled from 'styled-components';
import PropTypes from 'prop-types';


/** @component */
export const LayoutSubhead = styled.h2`
    font-size: ${({ fontSize }) => fontSize}px;
    line-height: normal;
    margin-bottom: ${({ marginBottom }) => marginBottom || 20}px;
    font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

LayoutSubhead.propTypes = {
    children: PropTypes.node.isRequired,
    fontSize: PropTypes.number,
    marginBottom: PropTypes.number,
    bold: PropTypes.bool,
};

LayoutSubhead.defaultProps = {
    fontSize: 16,
    marginBottom: 20,
    bold: false,
};

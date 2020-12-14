import styled from 'styled-components';
import PropTypes from 'prop-types';


/** @component */
export const LayoutSubsubhead = styled.h3`
    font-size: ${({ fontSize }) => fontSize}px;
    line-height: normal;
    margin-bottom: ${({ marginBottom }) => marginBottom}px;
    font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

LayoutSubsubhead.propTypes = {
    children: PropTypes.node.isRequired,
    fontSize: PropTypes.number,
    marginBottom: PropTypes.number,
    bold: PropTypes.bool,
};

LayoutSubsubhead.defaultProps = {
    fontSize: 13,
    marginBottom: 10,
    bold: false,
};

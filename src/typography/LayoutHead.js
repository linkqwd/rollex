import PropTypes from 'prop-types';
import styled from 'styled-components';


/** @component */
export const LayoutHead = styled.h1`
    font-size: ${({ fontSize }) => fontSize}px;
    line-height: normal;
    margin-bottom: ${({ marginBottom }) => marginBottom}px;
    font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

LayoutHead.propTypes = {
    children: PropTypes.node.isRequired,
    fontSize: PropTypes.number,
    marginBottom: PropTypes.number,
    bold: PropTypes.bool,
};

LayoutHead.defaultProps = {
    fontSize: 24,
    marginBottom: 30,
    bold: false,
};

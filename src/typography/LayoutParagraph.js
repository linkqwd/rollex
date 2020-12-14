import PropTypes from 'prop-types';
import styled from 'styled-components';


/** @component */
export const LayoutParagraph = styled.p`
    font-size: ${({ fontSize }) => fontSize}px;
    color: ${({ hint }) => (hint ? '#848484' : 'inherit')};
    margin-bottom: ${({ marginBottom }) => marginBottom}px;
    font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

LayoutParagraph.propTypes = {
    children: PropTypes.node.isRequired,
    fontSize: PropTypes.number,
    marginBottom: PropTypes.number,
    bold: PropTypes.bool,
    hint: PropTypes.bool,
};

LayoutParagraph.defaultProps = {
    fontSize: 13,
    marginBottom: 0,
    bold: false,
    hint: false,
};

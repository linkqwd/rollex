import styled from 'styled-components';
import PropTypes from 'prop-types';

import { borderColor } from '../style';


/** @component */
export const TableColumn = styled.td`
    text-align: ${({ align }) => align};
    border-top: 1px solid ${borderColor};
    vertical-align: ${({ vAlign }) => vAlign};
    ${({ whiteSpace }) => (whiteSpace && `white-space: ${whiteSpace};`)};
`;

TableColumn.propTypes = {
    children: PropTypes.node,
    align: PropTypes.oneOf(['left', 'center', 'right']),
    vAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
    /** Sets custom white-space */
    whiteSpace: PropTypes.string,
};

TableColumn.defaultProps = {
    align: 'left',
    vAlign: 'top',
};

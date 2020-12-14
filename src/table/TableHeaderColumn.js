import styled from 'styled-components';
import PropTypes from 'prop-types';
import { sizes } from './utils';


/** @component */
export const TableHeaderColumn = styled.th`
    text-align: left;
    padding: ${({ size }) => (
        size ? `${sizes[size][0]}px ${sizes[size][1]}px` : `${sizes.small[0]}px ${sizes.small[1]}px`
    )};
    vertical-align: ${({ vAlign }) => vAlign};
    font-weight: bold;
    ${({ whiteSpace }) => (whiteSpace && `white-space: ${whiteSpace};`)};
`;

TableHeaderColumn.propTypes = {
    children: PropTypes.node,
    /** Padding sizes, values: extraSmall, small, medium, large */
    size: PropTypes.oneOf(Object.keys(sizes)),
    vAlign: PropTypes.string,
    /** Sets custom white-space */
    whiteSpace: PropTypes.string,
};

TableHeaderColumn.defaultProps = {
    vAlign: 'top',
};

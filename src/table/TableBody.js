import styled from 'styled-components';
import { borderColor } from '../style';
import PropTypes from 'prop-types';
import { getSize, sizes } from './utils';


/** @component */
export const TableBody = styled.tbody`
    border: 1px solid ${borderColor};
    ${getSize};
`;

TableBody.propTypes = {
    children: PropTypes.node.isRequired,
    /** Padding sizes, values: extraSmall, small, medium, large */
    size: PropTypes.oneOf(Object.keys(sizes)),
};

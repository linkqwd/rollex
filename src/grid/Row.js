import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GUTTER } from './constants';

export const ThemeContext = React.createContext();

const GridRow = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction || 'row'};
    justify-content: ${({ justify }) => justify || 'flex-start'};
    align-items: ${({ align }) => align || 'stretch'};
    flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
    // Gutter between rows
    margin-bottom: ${({ theme: { vGutter, noVGutter } }) => (noVGutter ? 0 : vGutter || 30)}px;
    margin-right: ${({ theme: { hGutter, noHGutter } }) => (noHGutter ? 0 : hGutter ? `-${hGutter / 2}px` : `-${GUTTER / 2}px`)};
    margin-left: ${({ theme: { hGutter, noHGutter } }) => (noHGutter ? 0 : hGutter ? `-${hGutter / 2}px` : `-${GUTTER / 2}px`)};
    &:last-child {
        margin-bottom: 0;
    }
`;

export const Row = ({ hGutter, vGutter, noVGutter, noHGutter, children, ...restProps }) => {
    const theme = { hGutter, vGutter, noVGutter, noHGutter };
    return (
        <ThemeContext.Provider value={{ theme }}>
            <GridRow {...restProps} theme={theme}>
                {children}
            </GridRow>
        </ThemeContext.Provider>
    );
};

Row.propTypes = {
    /** change horizontal gutter */
    hGutter: PropTypes.number,
    /** change vertical gutter */
    vGutter: PropTypes.number,
    /** remove vertical gutter */
    noVGutter: PropTypes.bool,
    /** remove horizontal gutter */
    noHGutter: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

Row.defaultProps = {
    noVGutter: false,
    noHGutter: false,
};

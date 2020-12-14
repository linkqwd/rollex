import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { GUTTER } from './constants';
import { ThemeContext } from './Row';


const Column = styled.div`
    flex-grow: ${({ grow }) => grow};
    flex-shrink: ${({ shrink }) => shrink};
    flex-basis: ${({ basis }) => basis};
    align-self: ${({ align }) => align};
    ${({ minWidth }) => minWidth && css`
        min-width: ${minWidth || '0'};
    `};
    ${({ widthValue }) => widthValue && css`
        width: ${widthValue};
    `};
    box-sizing: border-box;
    // Gutter between columns
    padding-right: ${({ theme: { hGutter, noHGutter } }) => (noHGutter ? 0 : hGutter ? `${hGutter / 2}px` : `${GUTTER / 2}px`)};
    padding-left: ${({ theme: { hGutter, noHGutter } }) => (noHGutter ? 0 : hGutter ? `${hGutter / 2}px` : `${GUTTER / 2}px`)};
    
    ${({ fitRight }) => fitRight && css`
        margin-left: auto;
    `};

    ${({ fitLeft }) => fitLeft && css`
        margin-right: auto;
    `};
    
    ${({ mr }) => mr && css`
        margin-right: ${mr};
    `};
    
    ${({ ml }) => ml && css`
        margin-left: ${ml};
    `};
`;

export const Col = ({ children, ...props }) => (
    <ThemeContext.Consumer>
        {({ theme }) => <Column {...props} theme={theme}>{children}</Column>}
    </ThemeContext.Consumer>
);

Col.Main = styled(Column)`
    flex: 1 0 0;
    align-self: flex-start;
`;

Col.Sidebar = styled(Column)`
    flex: 0 0 ${({ width }) => width || '350px'};
    align-self: ${({ align }) => align || 'stretch'};

    @media (max-width: 768px) {
        flex: 0 0 ${({ width }) => width || '250px'};
    }
`;

// used to align content (text, checkbox) inside Col
Col.Aligner = styled.div`
    display: flex;
    min-height: 40px;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
`;

Col.propTypes = {
    children: PropTypes.node,
    /** flex-grow value */
    grow: PropTypes.number,
    /** flex-shrink value */
    shrink: PropTypes.number,
    /** flex-basis value */
    basis: PropTypes.string,
    /** align-self value */
    align: PropTypes.string,
    widthValue: PropTypes.string,
    /** place Col at the right */
    fitRight: PropTypes.bool,
    /** place Col at the left */
    fitLeft: PropTypes.bool,
    /** margin-right value */
    mr: PropTypes.string,
    /** margin-left value */
    ml: PropTypes.string,
    /** theme from ThemeProvider at Row component */
    theme: PropTypes.shape({
        hGutter: PropTypes.number,
    }),
    /** custom value for min-width, default is: 0 */
    minWidth: PropTypes.string,
};

Col.defaultProps = {
    grow: 0,
    shrink: 1,
    minWidth: '0',
    basis: 'auto',
    align: 'auto',
    fitRight: false,
    fitLeft: false,
};

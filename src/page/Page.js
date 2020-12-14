import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { backgroundColor, pageWidthNormal } from '../style';


const PageContent = styled.div`
    margin-top: ${({ mt }) => mt};
    margin-bottom: ${({ mb }) => mb};
    margin-left: auto;
    margin-right: auto;
    padding-right: 15px;
    padding-left: 15px;
    max-width: ${pageWidthNormal};
    width: 100%;
    box-sizing: border-box;
    flex: ${({ fullHeight }) => fullHeight ? '1 1 auto' : '0 0 auto'};
    ${({ verticalIndent }) => verticalIndent && css`
        padding-top: 30px;
        padding-bottom: 30px;
    `}
`;

const GreySubstrate = styled.div`
    margin-top: ${({ mt }) => mt};
    margin-bottom: ${({ mb }) => mb};
    flex: ${({ fullHeight }) => fullHeight ? '1 1 auto' : '0 0 auto'};
    background-color: ${backgroundColor};
    ${({ verticalIndent }) => verticalIndent && css`
        padding-top: 30px;
        padding-bottom: 30px;
    `}
`;


export const Page = ({ children, greyBg, ...props }) => {
    return (
        greyBg ?
            <GreySubstrate {...props}>
                <PageContent>{children}</PageContent>
            </GreySubstrate>
            :
            <PageContent {...props}>{children}</PageContent>
    );
};

Page.propTypes = {
    children: PropTypes.node,
    /** add grey background */
    greyBg: PropTypes.bool,
    /** make Page stretch minimum to viewport */
    fullHeight: PropTypes.bool,
    /** margin-top value */
    mt: PropTypes.string,
    /** margin-bottom value */
    mb: PropTypes.string,
    /** add 30px vertical padding */
    verticalIndent: PropTypes.bool,
};

Page.defaultProps = {
    fullHeight: false,
    mt: '0',
    mb: '0',
    verticalIndent: false,
};

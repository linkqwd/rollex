import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { blackColor, linkColor } from '../style';


const Link = styled.a.attrs(props => ({ 'data-qa': props.dataQa }))`
    text-decoration: none;
    color: ${({ active }) => active ? blackColor : linkColor};
    font-weight: ${({ active }) => active ? 'bold' : 'normal'};
    line-height: 18px;
    cursor: pointer;
`;

export const BreadcrumbItem = ({ children, ...rest }) =>
    <Link {...rest}>{children}</Link>;

BreadcrumbItem.propTypes = {
    /** Link children node. */
    children: PropTypes.node,

    /** Link hyper-reference (URL). */
    href: PropTypes.string,

    /** Use selector `[data-qa="${dataQa}"]` to get DOM node. */
    dataQa: PropTypes.string,
    active: PropTypes.bool,
};

BreadcrumbItem.defaultProps = {
    active: false,
};

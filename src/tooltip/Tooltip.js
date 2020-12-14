import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { radius, borderColor, greyColor } from '../style';
import { useClickOutside } from '../utils';

const bg = 'white';
const arrowSize = 5;
const doubleArrowSize = 2 * arrowSize;
const arrowDelta = 'calc(100% + 7px)';
const arrowBorderSize = arrowSize + 1;
const doubleArrowBorderSize = 2 * (arrowSize + 1);

const DefaultHoverElem = styled.span`
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    text-align: center;
    font-weight: bold;
    line-height: 18px;
    font-size: 12px;
    border: 1px solid ${borderColor};
    background-color: ${greyColor};
    color: #777;
    transition: background-color .2s linear;
    cursor: pointer;

    &:hover {
        background-color: #ddd;
    }
`;

const HoverElemWrapper = styled.div`
    position: relative;
    display: ${({ displayBlock }) => displayBlock ? 'block' : 'inline-block'};
`;

const Content = styled.span`
    position: absolute;
    z-index: 50;
    min-width: 200px;
    padding: 10px;
    background-color: ${bg};
    border-radius: ${radius};
    border: 1px solid ${borderColor};
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    transition: all .2s linear;
    visibility: hidden;
    opacity: 0;
    
    ${props => (props.contentWidth) && css`
        width: ${props.contentWidth};
    `}
    
    ${props => (props.active || props.open) && css`
        visibility: visible;
        opacity: 1;
    `}
    
    ${props => !props.noHover && css`
        ${HoverElemWrapper}:hover & {
            visibility: visible;
            opacity: 1;
        }
    `}
`;

const ContentTop = styled(Content)`
    left: 50%;
    bottom: ${arrowDelta};
    transform: translateX(-50%);
    // bottom arrow
    ${props => !props.withoutCorner && css`
        &:before {
            content: "";
            position: absolute;
            left: 50%;
            bottom: ${-doubleArrowBorderSize}px;
            margin-left: ${-arrowBorderSize}px;
            border: ${arrowBorderSize}px solid;
            border-color: ${borderColor} transparent transparent transparent;
        }

        &:after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: ${-doubleArrowSize}px;
            margin-left: ${-arrowSize}px;
            border: ${arrowSize}px solid;
            border-color: ${bg} transparent transparent transparent;
        }
    `}
`;

const ContentRight = styled(Content)`
    top: 50%;
    left: ${arrowDelta};
    transform: translateY(-50%);
    // left arrow
    ${props => !props.withoutCorner && css`
        &:before {
            content: "";
            position: absolute;
            top: 50%;
            left: ${-doubleArrowBorderSize}px;
            margin-top: ${-arrowBorderSize}px;
            border: ${arrowBorderSize}px solid;
            border-color: transparent ${borderColor} transparent transparent;
        }

        &:after {
            content: "";
            position: absolute;
            top: 50%;
            left: ${-doubleArrowSize}px;
            margin-top: ${-arrowSize}px;
            border: ${arrowSize}px solid;
            border-color: transparent ${bg} transparent transparent;
        }
    `}
`;

const ContentBottom = styled(Content)`
    left: 50%;
    top: ${arrowDelta};
    transform: translateX(-50%);
    // top arrow
    ${props => !props.withoutCorner && css`
        &:before {
            content: "";
            position: absolute;
            left: 50%;
            top: ${-doubleArrowBorderSize}px;
            margin-left: ${-arrowBorderSize}px;
            border: ${arrowBorderSize}px solid;
            border-color: transparent transparent ${borderColor} transparent;
        }

        &:after {
            content: "";
            position: absolute;
            left: 50%;
            top: ${-doubleArrowSize}px;
            margin-left: ${-arrowSize}px;
            border: ${arrowSize}px solid;
            border-color: transparent transparent ${bg} transparent;
        }
    `}
`;

const ContentLeft = styled(Content)`
    top: 50%;
    right: ${arrowDelta};
    transform: translateY(-50%);
    // right arrow
    ${props => !props.withoutCorner && css`
        &:before {
            content: "";
            position: absolute;
            top: 50%;
            left: 100%;
            margin-top: ${-(arrowSize + 1)}px;
            border: ${arrowSize + 1}px solid;
            border-color: transparent transparent transparent ${borderColor};
        }

        &:after {
            content: "";
            position: absolute;
            top: 50%;
            left: 100%;
            margin-top: ${-arrowSize}px;
            border: ${arrowSize}px solid;
            border-color: transparent transparent transparent ${bg};
        }
    `}
`;


const TOP = 'top';
const BOTTOM = 'bottom';
const LEFT = 'left';
const RIGHT = 'right';

export const Tooltip = (props) => {
    const {
        content,
        withoutCorner,
        children = <DefaultHoverElem>?</DefaultHoverElem>,
        position,
        noHover,
        active,
        showOnClick,
        contentWidth,
        ...rest
    } = props;

    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    const handleClose = () => setOpen(false);
    const handleOpen = () => {
        if (!showOnClick) return;
        setOpen(true);
    };

    useClickOutside(ref, () => {
        if (open) handleClose();
    });

    let ContentElem;
    switch (position) {
        case TOP:
            ContentElem = ContentTop;
            break;
        case RIGHT:
            ContentElem = ContentRight;
            break;
        case BOTTOM:
            ContentElem = ContentBottom;
            break;
        case LEFT:
            ContentElem = ContentLeft;
            break;
        default:
            ContentElem = ContentBottom;
    }

    return (
        <HoverElemWrapper ref={ref} onClick={handleOpen} {...rest}>
            {children}
            <ContentElem
                open={open}
                active={active}
                noHover={noHover}
                contentWidth={contentWidth}
                withoutCorner={withoutCorner}
            >
                {content}
            </ContentElem>
        </HoverElemWrapper>
    );
};

Tooltip.propTypes = {
    /** Tooltip content. */
    content: PropTypes.node.isRequired,

    /** Tooltip position (top, bottom, left, right). Bottom by default. */
    position: PropTypes.oneOf([TOP, BOTTOM, LEFT, RIGHT]),

    /** If true added corner to the tooltip element. */
    withoutCorner: PropTypes.bool,

    /** always visible if true */
    active: PropTypes.bool,

    /** disable hover if true. */
    noHover: PropTypes.bool,

    /** show tooltip on click if true. This meant to be used along with noHover */
    showOnClick: PropTypes.bool,

    /** adds display: block, usually for stretching tooltip to 100% width as a parent element */
    displayBlock: PropTypes.bool,

    /** set content width */
    contentWidth: PropTypes.string,
};

Tooltip.defaultProps = {
    withoutCorner: false,
    noHover: false,
    active: false,
    showOnClick: false,
    displayBlock: false,
    contentWidth: '',
};

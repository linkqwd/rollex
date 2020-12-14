import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { bgGreen, borderColor, whiteColor } from '../style';


const Node = styled.div`
    position: relative;
    padding-left: 25px;
    margin-top: 5px;
    margin-left: 2px;
    // vertical line
    &:before {
        content: "";
        position: absolute;
        top: -5px;
        bottom: ${({ isLast }) => isLast ? 'auto' : 0};
        height: ${({ isLast }) => isLast ? '15px' : 'auto'};
        left: 6px;
        width: 0;
        border-left: 1px solid ${borderColor};
    }
`;

const NodeContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
`;

const NodeSelectWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    margin-left: 8px;
    padding-right: 4px;
    cursor: pointer;
    &:hover {
        background-color: #e8e8e8;
    }
`;

const ExpandButton = styled.span`
    position: absolute;
    top: 0;
    left: 24px;
    display: inline-block;
    width: 16px;
    height: 16px;
    line-height: 16px;
    border: 1px solid ${borderColor};
    text-align: center;
    font-size: 12px;
    cursor: pointer;
    background-color: ${whiteColor};
    &:after {
        content: "${({ isExpanded }) => isExpanded ? '–' : '+'}";
    }
`;

const NodeCheckbox = styled.span`
    position: relative;
    flex: 0 0 12px;
    min-width: 12px;  // chrome fix
    height: 12px;
    margin: 2px 12px;
    border: 1px solid ${({ isSelected, hasSelectedChild }) => isSelected || hasSelectedChild ? bgGreen : borderColor};
    background-color: ${({ isSelected }) => isSelected ? bgGreen : whiteColor};
    border-radius: 2px;

    ${({ hasSelectedChild }) => hasSelectedChild ?
        css`
            &:after {
                content: '';
                background-color: ${bgGreen};
                position: absolute;
                width: 10px;
                height: 2px;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        ` :
        css`
            & svg {
                color: white;
                position: absolute;
                width: 8px;
                height: 6px;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        `
    };
`;

const LineBeforeExpandButton = styled.span`
    margin-left: 8px;
    min-width: 1px;
    flex: 0 0 1px;
    // this need to prevent minor move on expand / collapse
    border-left: 1px solid ${({ hasChildren }) => hasChildren ? borderColor : whiteColor};
    // horizontal line
    &:before {
        content: "";
        position: absolute;
        width: 18px;
        height: 0;
        top: 9px;
        left: 6px;
        border-top: 1px solid ${borderColor};
    }

    ${({ hasChildren }) => hasChildren ? css`
        &:after {
            content: "";
            margin-left: -9px
        }
    ` : ''};
`;

const Leaf = styled.span`
    display: inline-block;
    width: 9px;
    &:before {
        content: "";
        position: absolute;
        width: 40px;
        height: 0;
        top: 10px;
        left: 6px;
        border-top: 1px solid ${borderColor};
    }
`;


export const TreeNode = (props) => {
    const {
        nodeId,
        isLast,
        isExpandedFn,
        isSelectedFn,
        hasSelectedParentFn,
        hasSelectedChildFn,
        nodeRenderer,
        onExpand,
        onSelect,
        getNodeById,
        getChildren,
        utilData,
    } = props;

    const isExpanded = isExpandedFn(nodeId);
    const isSelected = isSelectedFn(nodeId);
    const children = getChildren(nodeId);
    const hasChildren = children && children.length > 0;
    const lastIdx = isExpanded ? children.length - 1 : 0;
    const node = getNodeById(nodeId);
    const hasSelectedChild = hasSelectedChildFn ? hasSelectedChildFn(nodeId) : false;
    const hasSelectedParent = hasSelectedParentFn ? hasSelectedParentFn(nodeId) : false;

    return (
        <Node isLast={isLast}>
            <NodeContent>
                {
                    hasChildren ?
                        <LineBeforeExpandButton
                            hasChildren={(isExpanded && hasChildren)}
                            onClick={() => onExpand(node)}
                        >
                            <ExpandButton isExpanded={isExpanded} />
                        </LineBeforeExpandButton>
                        :
                        <Leaf />
                }
                <NodeSelectWrapper onClick={() => onSelect(node)}>
                    <NodeCheckbox
                        isSelected={isSelected}
                        hasSelectedChild={hasSelectedChild}
                        hasSelectedParent={hasSelectedParent}
                    >
                        {isSelected && (
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 6'>
                                <path style={{ fill: 'currentColor' }} d='M2.81 5.68L0 2.6l1.48-1.35L3 2.92 6.47 0l1.29 1.53-4.95 4.15z' />
                            </svg>
                        )}
                    </NodeCheckbox>
                    <span>
                        {nodeRenderer(node, utilData)}
                    </span>
                </NodeSelectWrapper>
            </NodeContent>

            {isExpanded ?
                children.map(
                    (childNodeId, idx) => (
                        <TreeNode
                            key={childNodeId}
                            isLast={idx === lastIdx}
                            isExpandedFn={isExpandedFn}
                            isSelectedFn={isSelectedFn}
                            hasSelectedChildFn={hasSelectedChildFn}
                            hasSelectedParentFn={hasSelectedParentFn}
                            nodeId={childNodeId}
                            nodeRenderer={nodeRenderer}
                            onExpand={onExpand}
                            onSelect={onSelect}
                            getNodeById={getNodeById}
                            getChildren={getChildren}
                            utilData={utilData}
                            {...getNodeById(childNodeId)}
                        />
                    ),
                ) : null
            }
        </Node>
    );
};

TreeNode.defaultProps = {
    isLast: false,
};

TreeNode.propTypes = {
    nodeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isLast: PropTypes.bool,
    isSelectedFn: PropTypes.func,
    isExpandedFn: PropTypes.func,
    hasSelectedParentFn: PropTypes.func,
    hasSelectedChildFn: PropTypes.func,
    nodeRenderer: PropTypes.func,
    children: PropTypes.array,
    onExpand: PropTypes.func,
    onSelect: PropTypes.func,
    getNodeById: PropTypes.func,
    getChildren: PropTypes.func,
    utilData: PropTypes.shape({
        highlightCodeStart: PropTypes.number,
        highlightCodeEnd: PropTypes.number,
        highlightStart: PropTypes.number,
        highlightEnd: PropTypes.number,
    }),
};

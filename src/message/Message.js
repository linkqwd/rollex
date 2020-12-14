import React from 'react';
import PropTypes from 'prop-types';
import styled, {css, keyframes} from 'styled-components';
import { radius } from '../style';
import { CheckmarkIcon, CrossCircleIcon, AlarmIcon, InfoIcon } from '../icons';

const loadingAnim = keyframes`
    0 {
        //right: 100%;
        transform: translateX(-100%);
        //left: 0;
    }
    
    //35% {
    //    //right: 30%;
    //    
    //    left: 0;
    //}
    //
    //65% {
    //    right: 0;
    //}

    100% {
        //right: 0;
        //left: 100%;
        transform: translateX(250%);
    }
`;

const Loader = styled.div`
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    border-radius: ${radius} ${radius} 0 0;
`;

const theme = {
    green: {
        css: css`
            border-color: #22b14c;
            background-color: #f2fff6;
            ${Loader} {
                background-color: #2fd760;
                &:before {
                    content: '';
                    display: block;
                    height: 6px;
                    width: 40%;
                    background-color: #22b14c;
                    transform: translateX(-100%);
                    animation: ${loadingAnim} 1.4s infinite linear;
               }
            }
        `,
        icon: CheckmarkIcon,
        iconColor: '#22b14c',
    },

    red: {
        css: css`
            border-color: #ff6c71;
            background-color: #fff5f5;
            ${Loader} {
                background-color: #ff9fa2;
                &:before {
                    content: '';
                    display: block;
                    height: 6px;
                    width: 40%;
                    background-color: #ff6c71;
                    transform: translateX(-100%);
                    animation: ${loadingAnim} 1.4s infinite linear;
               }
            }
        `,
        icon: CrossCircleIcon,
        iconColor: '#ff6c71',
    },

    yellow: {
        css: css`
            border-color: #f5a623;
            background-color: #fff9f0;
            ${Loader} {
                background-color: #f8c46c;
                &:before {
                    content: '';
                    display: block;
                    height: 6px;
                    width: 40%;
                    background-color: #f5a623;
                    transform: translateX(-100%);
                    animation: ${loadingAnim} 1.4s infinite linear;
               }
            }
        `,
        icon: AlarmIcon,
        iconColor: '#f5a623',
    },

    lightBlue: {
        css: css`
            border-color: #54a3d5;
            background-color: #f3faff;
            ${Loader} {
                background-color: #7db9df;
                &:before {
                    content: '';
                    display: block;
                    height: 6px;
                    width: 40%;
                    background-color: #54a3d5;
                    transform: translateX(-100%);
                    animation: ${loadingAnim} 1.4s infinite linear;
               }
            }
        `,
        icon: InfoIcon,
        iconColor: '#54a3d5',
    },
};



const IconWrap = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    width: 22px;
    height: 22px;
`;

const StyledMessage = styled.div.attrs( props => ({
    'data-qa': props.dataQa,
}))`
    position: relative;
    padding: ${({ loading }) => loading ? '18px 20px 12px 41px' : '12px 20px 12px 41px'};
    margin-bottom: ${props => props.bottomIndent ? '30px' : 0};
    border: 1px solid transparent;
    border-radius: ${radius};

    ${({ loading }) => loading && css`
        ${IconWrap} {
            top: 16px;
        }
    `}

    ${props => theme[props.theme].css || ''};
`;


export const Message = ({ children, ...rest }) => {
    const Icon = theme[rest.theme].icon;
    return (
        <StyledMessage {...rest}>
            {rest.loading && <Loader />}
            <IconWrap>
                <Icon active color={theme[rest.theme].iconColor} />
            </IconWrap>
            {children}
        </StyledMessage>
    )
};

Message.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.oneOf(Object.keys(theme)).isRequired,
    dataQa: PropTypes.string,
    bottomIndent: PropTypes.bool,
};

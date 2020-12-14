import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


import { whiteColor } from '../style';


const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
`;

const Body = styled.div`
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
`;

const Footer = styled.footer``;

const HeaderWrapper = styled.header`
    position: relative;
    flex: 0 0 auto;
    height: ${props => (props.height ? props.height : '55px')};
`;

const FixedContainer = styled.div`
    z-index: 30;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: inherit;
    background-color: ${whiteColor};
    box-shadow: ${props => (props.shadow ? props.shadow : '0 0 2px rgba(0, 0, 0, 0.3)')};
`;


const Header = (props) => {
    return (
        <HeaderWrapper height={props.height}>
            <FixedContainer shadow={props.shadow}>
                {props.children}
            </FixedContainer>
        </HeaderWrapper>
    );
};

const Layout = props => <MainWrapper>{props.children}</MainWrapper>;

Layout.Header = Header;
Layout.Body = Body;
Layout.Footer = Footer;

export { Layout };


Header.propTypes = {
    children: PropTypes.node,
    height: PropTypes.string,
    shadow: PropTypes.string,
};

Layout.propTypes = {
    children: PropTypes.node,
};

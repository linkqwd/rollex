import React from 'react';
import styled from 'styled-components';
import { BrowserRouter,  NavLink, Route, Switch } from 'react-router-dom';
import { routes } from './components/utils/routes';
import { backgroundColor, greenColor } from '../src/';
import { Box } from '../src';


const activeClassName = 'nav-item-active';

const NavTitleStyled = styled.p`
    margin: 30px 0 4px 20px;
    color: #555;
    font-size: 14px;
    font-weight: bold;
`;

const NavLinkStyled = styled(NavLink).attrs({ activeClassName })`
    color: gray;
    font-size: 14px;
    text-decoration: none;

    padding: 8px 0 8px 16px;
    border-left: 4px solid transparent;

    &.${activeClassName} {
        border-left: 4px solid ${greenColor};
        color: ${greenColor};
    }

    &:hover {
        color: #333;
    }
`;

const Wrapper = styled.div`
    display: flex;
    height: 100%;
`;

const Nav = styled.nav`
    width: 300px;
    background: white;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    transition: width 0.1s linear;

    @media (max-width: 768px) {
        width: 170px;
    }
`;

const Main = styled.main`
    background-color: ${backgroundColor};
    padding: 20px;
    flex: 1;
    overflow-y: auto;
`;


export const App = () => (
    <BrowserRouter>
        <Wrapper>
            <Nav>
                {routes.map(
                    ({ name, path, exact }, index) => {
                        return (
                            path ?
                                <NavLinkStyled key={index} to={path} exact={exact}>
                                    {name}
                                </NavLinkStyled>
                            :
                                <NavTitleStyled key={index}>
                                    {name}
                                </NavTitleStyled>
                        )
                    }
                )}
            </Nav>
            <Box mt='10px'>
            <Main>
                {/*<Switch>*/}
                {/*    {routes*/}
                {/*        .filter(route => route.path)*/}
                {/*        .map(*/}
                {/*            ({ name, ...rest }, index) =>*/}
                {/*                <Route key={index} {...rest} />*/}
                {/*        )*/}
                {/*    }*/}
                {/*</Switch>*/}
            </Main>
            </Box>
        </Wrapper>
    </BrowserRouter>
);

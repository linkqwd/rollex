import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import { App } from './App';


const GlobalStyle = createGlobalStyle`
    html, body, #app {
        font-family: sans-serif;
        margin: 0;
        height: 100%;
        color: #333;
    }
`;


ReactDOM.render(
    <React.Fragment>
        <GlobalStyle />
        <App />
    </React.Fragment>,
    document.getElementById('app')
);

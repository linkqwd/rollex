import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { borderColor, radius } from "../style";


const themesList = {
    green: {
        discColor: '#22b14c',
    },

    red: {
        discColor: '#ff6c71',
    },

    yellow: {
        discColor: '#f5a623',
    },

    lightBlue: {
        discColor: '#54a3d5',
    },
};

/** @component */
export const List = styled.ul.attrs(({ dataQa }) => ({
    'data-qa': dataQa,
}))`
    margin: 0;
    padding: 0;
    list-style-position: inside;
    list-style-type: ${({ listStyle }) => listStyle};
    margin-bottom: ${({ marginBottom }) => marginBottom}px;

    ${({ theme }) => themesList[theme] && css`
        list-style-type: none;

        & li {
            position: relative;
            padding: 6px 10px 6px 20px;
        }        

        & li:before {
            position: absolute;
            content: '';
            top: 11px;
            left: 0;
            padding: 4px;
            border-radius: 100px;
            background: ${themesList[theme].discColor};
        }
    `}

    ${({ listWithBorders }) => listWithBorders && css`
        border: 1px solid ${borderColor};
        border-radius: ${radius};
        list-style-type: none;

        & li {
            position relative;
            padding: 20px;
        }

        & li + li {
            border-top: 1px solid ${borderColor};
        }  
    `}
`;

List.propTypes = {
    /** selector for QA needs */
    dataQa: PropTypes.string,
    listStyle: PropTypes.string,
    /** list type disc with color */
    theme: PropTypes.string,
    /** adds custom bottom indent in pixels */
    marginBottom: PropTypes.number,
    /** add borders to list and between list items */
    listWithBorders: PropTypes.bool,
};

List.defaultProps = {
    listStyle: 'none',
    theme: '',
    marginBottom: 0,
    listWithBorders: false,
};

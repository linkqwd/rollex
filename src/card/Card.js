import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { CardHeader } from './CardHeader';
import { CardSection } from './CardSection';
import { bgGreen, whiteColor, greyColor, borderColor, radius } from '../style';


const secondaryCss = css`
    ${CardHeader} {
        color: ${whiteColor};
        background-color: ${bgGreen};
    }

    ${CardSection} {
        background-color: ${greyColor};
    }
`;

/** @component */
export const Card = styled.div.attrs(({ dataQa }) => ({
    'data-qa': dataQa
}))`
    ${({ width }) => width && css`
        width: ${width};
    `};
    margin-bottom: ${({ marginBottom }) => marginBottom};
    box-sizing: border-box;
    ${({ withBorder }) => withBorder && css`
        border: 1px solid ${borderColor};
    `}
    border-radius: ${radius};
    background-color: ${({ secondary }) => secondary ? greyColor : whiteColor};
    ${({ secondary }) => secondary && secondaryCss};
`;

Card.propTypes = {
    /** selector for QA needs */
    dataQa: PropTypes.string,
    width: PropTypes.string,
    /** use secondary theme */
    secondary: PropTypes.bool,
    withBorder: PropTypes.bool,
    marginBottom: PropTypes.string,
};

Card.defaultProps = {
    secondary: false,
    withBorder: false,
    marginBottom: '30px',
};

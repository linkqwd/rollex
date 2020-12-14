import styled, { css } from 'styled-components';
import { bgGreen, borderColor, disabledBg, whiteColor, radius, errorColor } from '../style';

// font: font-size/line-height font-family
export const inputFontCss = '15px/18px Arial, sans-serif';


const colorResolver = ({ error, disabled }) => {
    if (error) {
        return errorColor;
    }
    if (disabled) {
        return '#e5e5e5';
    }
    return borderColor;
};


export const InputWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px;
    border-radius: ${radius};
    box-sizing: border-box;
    transition: border-color .1s linear;
    cursor: ${({ disabled }) => (disabled ? 'default' : 'text')};
    background-color: ${({ disabled }) => (disabled ? disabledBg : whiteColor)};
    color: ${colorResolver};
    border: 1px solid ${({ noBorder }) => (noBorder ? 'transparent' : '')};

    &:focus-within {
        ${({ noBorder }) => (noBorder ? css`border-color: transparent;` : css`border-color: ${bgGreen};`)}
    }

    input {
        width: 100%;
        min-width: 30px;
        outline: 0 none;
        padding: 10px 0;
        border: none;
        background: transparent;
        font: ${inputFontCss};
    }
`;

export const BeforeWrapper = styled.span`
    margin-right: 10px;
    color: #7c8796;
`;

export const AfterWrapper = styled.span`
    margin-left: 10px;
    color: #7c8796;
`;

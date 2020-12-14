import { css } from 'styled-components';

// Colors
export const backgroundColor = '#ebeff4';
export const linkColor = '#00a1cd';
export const blackColor = '#333';
export const whiteColor = '#fff';
export const borderColor = '#d0d4dc';
export const bgGreen = '#22b14c';
export const greyColor = '#f5f7f9';
export const darkGreyColor = '#929292';
export const pinkColor = '#ff6c71';
export const lightGreyColor = '#ebeff4';

// green theme
export const greenBgColor = '#d9f4e6';
export const greenColor = bgGreen;
// orange theme
export const orangeBgColor = '#ffebe0';
export const orangeColor = '#ff7b36';
// red theme
export const redBgColor = '#ffd7d7';
export const redColor = '#ff6565';
// blue theme
export const blueBgColor = '#e1eef7';
export const blueColor = '#314155';

export const errorColor = '#ff2900';
export const disabledBg = '#fafafa';
export const disabledFg = '#a5a5a5';

// Radius
export const radius = '3px';

// Font-size
export const smallText = '11px';
export const normalText = '13px';
export const smallTitle = '16px';
export const mediumTitle = '18px';
export const bigTitle = '24px';

// Width
export const pageWidthNormal = '1230px'; // content will be 1200px

const greyTheme = {
    backgroundColor: '#ebedee',
    color: blackColor,
    borderColor: '#ebedee',
};

const lightGreyTheme = {
    backgroundColor: blackColor,
    backgroundColorLighten: '#898989',
    backgroundColorDarken: '#666',
    color: borderColor,
    borderColor: borderColor,
};

export const theme = {
    grey: greyTheme,
    lightGrey: lightGreyTheme,

    green: {
        backgroundColor: bgGreen,
        backgroundColorLighten: '#26c254',
        backgroundColorDarken: '#1d9841',
        color: '#d9f4e6',
        borderColor: bgGreen,
    },

    red: {
        backgroundColor: '#ff6c71',
        backgroundColorLighten: '#ff9191',
        backgroundColorDarken: '#e35c61',
        color: '#ffd7d7',
        borderColor: '#ff6c71',
    },

    orange: {
        backgroundColor: '#ff7b36',
        backgroundColorLighten: '#ff9636',
        backgroundColorDarken: '#e16a2b',
        color: '#ffebe0',
        borderColor: '#ff7b36',
    },

    lightBlue: {
        backgroundColor: '#314155',
        backgroundColorLighten: '#e1eef7',
        backgroundColorDarken: '#e1eef7',
        color: '#e1eef7',
        borderColor: '#314155',
    },
};

export const getTheme = (props) => theme[props.theme || 'lightGrey'] || theme.lightGrey;

const getDimColor = ({ dimColor }) => {
    switch (dimColor) {
        case 'white':
            return 'rgba(255, 255, 255, 0.7)';
        case 'transparent':
            return 'transparent';
        default:
            return 'rgba(0, 0, 0, 0.7)'
    }
};

export const dimCss = css`
    background-color: ${getDimColor};
    width: 100%;
    height: 100%;
`;

export const overlayCss = css`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 200;
`;

export const shadowCss = css`
    border-radius: ${radius};
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
`;

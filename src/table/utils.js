import { css } from 'styled-components';


// Padding in pixels
export const sizes = {
    large: [30, 20],
    medium: [20, 20],
    small: [10, 20],
    extraSmall: [10, 10],
};

export const getSize = (props) => {
    const preset = sizes[props.size];
    if (preset) {
        const [topBottom, leftRight] = preset;
        return css`
            tr > td {
              padding: ${topBottom}px ${leftRight}px;
            }
        `;
    }

    const [topBottom, leftRight] = sizes.medium;
    return css`
        tr > td {
            padding: ${topBottom}px ${leftRight}px;
        }
    `;
};

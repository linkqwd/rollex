import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { borderColor } from '../style';


/** @component */
export const ListItem = styled.li.attrs(({ dataQa }) => ({
    'data-qa': dataQa,
}))`
    padding: 6px 10px;
    ${({ withBorder }) => withBorder && css`
        border-bottom: 1px solid ${borderColor};

        &:last-child {
            border-bottom: none;
        }
    `}
`;

ListItem.propTypes = {
    /** selector for QA needs */
    dataQa: PropTypes.string,
    withBorder: PropTypes.bool,
};

ListItem.defaultProps = {
    withBorder: false,
};

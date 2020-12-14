import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Wrapper = styled.div`
    display: ${({ display }) => display};
    font-size: 11px;
    margin: ${({ margin }) => margin};
    color: #848484;
`;

export const Hint = ({ children, ...rest }) =>
    !children ? null :
        <Wrapper {...rest}>{children}</Wrapper>;

Hint.propTypes = {
    children: PropTypes.node,
    display: PropTypes.string,
    margin: PropTypes.string,
};

Hint.defaultProps = {
    display: 'block',
    margin: '3px 0',
};


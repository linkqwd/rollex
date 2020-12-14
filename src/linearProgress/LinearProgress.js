import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Container = styled.div`
    overflow: hidden;
    background-color: #ddd;
    height: 5px;
    width: 100%;
`;

const ProgressBar = styled.div`
    transition: width 0.3s linear 0ms;
    background-color: #26c254;
    height: 100%;
    width: ${props => props.width}%;
`;

export const LinearProgress = ({ value, min, max, ...rest }) => (
    <Container {...rest}>
        <ProgressBar width={max * value / (max - min)} />
    </Container>
);

LinearProgress.propTypes = {
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
};
LinearProgress.defaultProps = {
    value: 0,
    min: 0,
    max: 100,
};

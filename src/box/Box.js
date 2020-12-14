import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';


const BoxStyles = styled.div`
    ${({ m }) => m && css`margin: ${m};`}
    ${({ mt }) => mt && css`margin-top: ${mt};`}
    ${({ mr }) => mr && css`margin-right: ${mr};`}
    ${({ mb }) => mb && css`margin-bottom: ${mb};`}
    ${({ ml }) => ml && css`margin-left: ${ml};`}
    ${({ mx }) => mx && css`margin-left: ${mx}; margin-right: ${mx};`}
    ${({ my }) => my && css`margin-top: ${my}; margin-bottom: ${my};`}

    ${({ p }) => p && css`padding: ${p};`}
    ${({ pt }) => pt && css`padding-top: ${pt};`}
    ${({ pr }) => pr && css`padding-right: ${pr};`}
    ${({ pb }) => pb && css`padding-bottom: ${pb};`}
    ${({ pl }) => pl && css`padding-left: ${pl};`}
    ${({ px }) => px && css`padding-left: ${px}; padding-right: ${px};`}
    ${({ py }) => py && css`padding-top: ${py}; padding-bottom: ${py};`}
`;

export const Box = ({ children, dataQa, ...rest }) => {
    return (
        <BoxStyles data-qa={dataQa} {...rest}>
            {children}
        </BoxStyles>
    );
};

Box.propTypes = {
    children: PropTypes.node,
    /** selector for QA needs */
    dataQa: PropTypes.string,
    /** margin: 5px 10px 15px 20px; or margin: 5px; */
    m: PropTypes.string,
    /** margin-top: 5px; */
    mt: PropTypes.string,
    /** margin-right: 10px; */
    mr: PropTypes.string,
    /** margin-bottom: 15px; */
    mb: PropTypes.string,
    /** margin-left: 20px; */
    ml: PropTypes.string,
    /** margin-left: 10px; margin-right: 10px; */
    mx: PropTypes.string,
    /** margin-top: 10px; margin-bottom: 10px; */
    my: PropTypes.string,
    /** padding: 5px 10px 15px 20px; */
    p: PropTypes.string,
    /** padding-top: 5px; */
    pt: PropTypes.string,
    /** padding-right: 10px; */
    pr: PropTypes.string,
    /** padding-bottom: 15px; */
    pb: PropTypes.string,
    /** padding-left: 20px; */
    pl: PropTypes.string,
    /** padding-left: 10px; padding-right: 10px; */
    px: PropTypes.string,
    /** padding-top: 10px; padding-bottom: 10px; */
    py: PropTypes.string,
};

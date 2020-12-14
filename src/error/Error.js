import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { errorColor } from '../style';
import { strHash } from '../utils';


const ERR_MARKER_CLASS = 'zk-ui-error';

const Wrapper = styled.div`
    margin-top: ${({ marginTop }) => marginTop}px;
    margin-bottom: ${({ marginBottom }) => marginBottom}px;
    font-size: ${({ fontSize }) => fontSize}px;
    color: ${errorColor};
`;

export const Error = ({ children, dataQa, ...rest }) => {
    if (!children) return null;
    else if (Array.isArray(children)) {
        return (
            children.map((elem, idx) => (<Wrapper
                key={strHash(elem.toString()) + idx}
                data-qa={dataQa}
                {...rest}
                className={ERR_MARKER_CLASS}
            >
                {elem}
            </Wrapper>))
        );
    }
    return (
        <Wrapper
            data-qa={dataQa}
            {...rest}
            className={ERR_MARKER_CLASS}
        >
            {children}
        </Wrapper>
    );
};

Error.propTypes = {
    /** Error children node. */
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),

    /** Use selector `[data-qa="${dataQa}"]` to get DOM node. */
    dataQa: PropTypes.string,
    fontSize: PropTypes.number,
    marginBottom: PropTypes.number,
    marginTop: PropTypes.number,
};

Error.defaultProps = {
    fontSize: 11,
    marginBottom: 0,
    marginTop: 3,
};

export function getFirstErrorOnPage() {
    return document.querySelector(`.${ERR_MARKER_CLASS}`);
}

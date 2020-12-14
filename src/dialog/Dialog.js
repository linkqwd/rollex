import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { overlayCss, dimCss } from '../style';


const Overlay = styled.div`
    ${overlayCss};
    ${dimCss};
    display: flex;
`;

const Content = styled.div`
    margin: auto;  // with flex centers content
`;

export class Dialog extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        /** Background color of the dialog overlay. */
        dimColor: PropTypes.oneOf(['white', 'black', 'transparent']),

        /** If true the dialog won't close on overlay click. */
        modal: PropTypes.bool,

        /** If true the dialog is open, close otherwise. */
        open: PropTypes.bool,

        /** Callback fired on overlay click (if dialog is not modal). */
        onRequestClose: PropTypes.func,
    };

    static defaultProps = {
        modal: false,
        open: false,
    };

    constructor(props) {
        super(props);
        this.shouldClose = null;
    }

    overlayRef = (elem) => (this.overlay = elem);

    onRequestClose = (e) => {
        if (this.shouldClose === null) this.shouldClose = true;
        const { onRequestClose, modal } = this.props;
        if (this.shouldClose && onRequestClose && !modal && e.target === this.overlay) {
            onRequestClose(e);
        }
        this.shouldClose = null;
    };

    handleContentOnMouseDown = () => {
        this.shouldClose = false;
    };

    // TODO: don't add multiple dimmer when open multiple dialogs
    render() {
        const { children, dimColor, open, onRequestClose, ...rest } = this.props;

        return !open ? null : ReactDOM.createPortal(
            <Overlay
                dimColor={dimColor}
                ref={this.overlayRef}
                onClick={this.onRequestClose}
                {...rest}
            >
                <Content
                    onMouseDown={this.handleContentOnMouseDown}
                >
                    {children}
                </Content>
            </Overlay>,
            document.body,
        );
    }
}

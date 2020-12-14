import React from 'react';
import styled from 'styled-components';
import { Dialog, LinkButton } from 'zk-ui';

const Info = styled.div`
    font-weight: bold;
    color: white;
`;


class DialogExample extends React.Component {
    state = { isOpen: false };
    toggle = () => this.setState({ isOpen: !this.state.isOpen });

    render() {
        return (
            <div>
                <LinkButton theme='green' onClick={this.toggle}>
                    Open dialog
                </LinkButton>
                <Dialog
                    open={this.state.isOpen}
                    onRequestClose={this.toggle}
                >
                    <Info>
                        Hello people of Earth!
                    </Info>
                </Dialog>
            </div>
        );
    }
}

export default DialogExample;

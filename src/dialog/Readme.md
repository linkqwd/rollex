```js
import styled from 'styled-components';
import { Dialog, LinkButton } from 'zk-ui';

const Info = styled.div`
    font-weight: bold;
    color: white;
`;

class DialogExample extends React.Component {
    constructor() {
        super();
        this.state = { isOpen: false };
        this.toggle = this.toggle.bind(this);
    }

    toggle() { this.setState({ isOpen: !this.state.isOpen }) };

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
};

<DialogExample />
```

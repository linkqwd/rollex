```js
import { Component } from 'react';
import { FormField, Switch } from 'zk-ui';


class SwitchExample extends Component {
    constructor() {
        super();
        this.state = { selected: 'female', isOn: true, enabled: true };
        this.toggle = this.toggle.bind(this);
    }
    
    toggle(e) { this.setState({ isOn: e.target.value }); }    

    render() {
        return (
            <>
                <FormField>
                    <Switch
                        disabled
                        name='disabled-switch'
                        label='ON'
                        checked
                        onChange={() => null}
                    />
                </FormField>
                <FormField>
                    <Switch
                        name='verified'
                        label={(checked) => checked ? 'ON' : 'OFF'}
                        checked={this.state.isOn}
                        onChange={this.toggle}
                    />
                </FormField>
            </>
        );
    }
}

<SwitchExample />
```

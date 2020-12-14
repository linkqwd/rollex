```js
import { Component } from 'react';
import { FormField, Checkbox } from 'zk-ui';


class CheckboxExample extends Component {
    constructor() {
        super();
        this.state = { selected: 'female', isOn: true, enabled: true };
        this.enable = this.enable.bind(this);
    }
    
    enable(e) { this.setState({ enabled: e.target.value }); }    

    render() {
        return (
            <>
                <FormField>
                    <Checkbox
                        name='enabled-checkbox'
                        label='Enabled'
                        checked={this.state.enabled}
                        onChange={this.enable}
                    />
                </FormField>
                <FormField>
                    <Checkbox
                        disabled
                        name='disabled-checkbox'
                        label='Disabled'
                        checked={true}
                        onChange={() => null}
                    />
                </FormField>
            </>
        );
    }
}

<CheckboxExample />
```

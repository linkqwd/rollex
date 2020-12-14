```js
import { Component } from 'react';
import { FormField, RadioButton } from 'zk-ui';


class RadioButtonExample extends Component {
    constructor() {
        super();
        this.state = { selected: 'female', isOn: true, enabled: true };
        this.select = this.select.bind(this);
    }
    
    select(e) { this.setState({ selected: e.target.value }); }    

    render() {
        return (
            <>
                <FormField>
                    <RadioButton
                        name='gender'
                        label='Female'
                        value='female'
                        checked={this.state.selected === 'female'}
                        onChange={this.select}
                    />
                </FormField>
                <FormField>
                    <RadioButton
                        name='gender'
                        label='Male'
                        value='male'
                        checked={this.state.selected === 'male'}
                        onChange={this.select}
                    />
                </FormField>
                <FormField>
                    <RadioButton
                        disabled
                        name='gender'
                        label='Other'
                        value='other'
                        checked={this.state.selected === 'other'}
                        onChange={this.select}
                    />
                </FormField>
            </>
        );
    }
}

<RadioButtonExample />
```

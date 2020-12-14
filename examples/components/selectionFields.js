import React, { Fragment, Component } from 'react';
import { FormField, RadioButton, RadioGroup, Switch, Checkbox } from 'zk-ui';


export default class extends Component {
    state = { selected: 'female', isOn: true, enabled: true };

    enable = (e) => this.setState({ enabled: e.target.value });
    select = (e) => this.setState({ selected: e.target.value });
    toggle = (e) => this.setState({ isOn: e.target.value });

    render() {
        const { selected, isOn, enabled } = this.state;
        return (
            <Fragment>
                <FormField>
                    <Checkbox
                        name='enabled-checkbox'
                        label='Enabled'
                        checked={enabled}
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
                <FormField>
                    <RadioButton
                        name='gender'
                        label='Female'
                        value='female'
                        checked={selected === 'female'}
                        onChange={this.select}
                    />
                </FormField>
                <FormField>
                    <RadioButton
                        name='gender'
                        label='Male'
                        value='male'
                        checked={selected === 'male'}
                        onChange={this.select}
                    />
                </FormField>
                <FormField>
                    <RadioButton
                        disabled
                        name='gender'
                        label='Other'
                        value='other'
                        checked={selected === 'other'}
                        onChange={this.select}
                    />
                </FormField>
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
                        checked={isOn}
                        onChange={this.toggle}
                    />
                </FormField>
            </Fragment>
        );
    }
}

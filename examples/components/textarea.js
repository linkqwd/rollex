import React, { Component, Fragment } from 'react';
import { FormField, Textarea } from 'zk-ui';

class TextareaExample extends Component {
    state = { noteValue: '' };
    changeNote = (e) => this.setState({ noteValue: e.target.value });

    render() {
        return (
            <Fragment>
                <FormField>
                    <Textarea
                        label='Note'
                        name='note'
                        placeholder='Enter note content'
                        value={this.state.noteValue}
                        onChange={this.changeNote}
                        hint={`Symbols left: ${100 - this.state.noteValue.length}`}
                        maxLength={100}
                    />
                </FormField>
                <FormField>
                    <Textarea
                        disabled
                        defaultValue='Disabled area'
                        label='Disabled text area'
                        name='note-disabled'
                    />
                </FormField>
                <FormField>
                    <Textarea
                        error='Something went wrong'
                        label='Text area with error'
                        name='note-err'
                        placeholder='Enter note content'
                    />
                </FormField>
            </Fragment>
        );
    }
}

export default TextareaExample;

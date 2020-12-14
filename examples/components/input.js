import React, { Fragment } from 'react';
import { FormField, Input } from 'zk-ui';
import { NoteIcon } from 'zk-ui/icons';


export default () => (
    <Fragment>
        <FormField>
            <Input
                before={<NoteIcon />}
                label='User name'
                name='user'
                type='text'
                placeholder='Enter user name'
                hint={'User name should be less than 20 symbols'}
                maxLength={20}
            />
        </FormField>
        <FormField>
            <Input
                label='Password'
                name='password'
                type='password'
                placeholder='Enter passward'
            />
        </FormField>
        <FormField>
            <Input
                disabled
                label='Disabled input'
                defaultValue='Disabled input'
                name='name-disabled'
                type='text'
            />
        </FormField>
        <FormField>
            <Input
                error='Something went wrong'
                label='Input with error'
                name='name-err'
                type='text'
                placeholder='Enter user name'
            />
        </FormField>
        <FormField>
            <Input
                label='Input without border'
                name='name-err'
                type='text'
                placeholder='Enter user name'
                noBorder
            />
        </FormField>
    </Fragment>
);

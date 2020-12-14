import React, { Fragment } from 'react';
import { FormField, NumberInput } from 'zk-ui';
import { WalletIcon } from 'zk-ui/icons';


export default () => (
    <Fragment>
        <FormField>
            <NumberInput
                before={<WalletIcon />}
                label='Price'
                name='price'
                placeholder='Enter price'
                hint='Price should be greater than 1000'
            />
        </FormField>
        <FormField>
            <NumberInput
                disabled
                label='Price'
                name='price'
                placeholder='Enter price'
            />
        </FormField>
        <FormField>
            <NumberInput
                label='Price'
                name='price'
                placeholder='Enter price'
                error={(name) => `Error in field: ${name}`}
            />
        </FormField>
    </Fragment>
);

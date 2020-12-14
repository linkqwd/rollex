import React, { Fragment } from 'react';
import { Spinner } from 'zk-ui';


export default () => (
    <Fragment>
        <Spinner size='extraLarge' />
        <Spinner size='large' />
        <Spinner />  {/* size='medium */}
        <Spinner size='small' />
    </Fragment>
);

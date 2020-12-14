import React, { Fragment } from 'react';
import { Tooltip, Link } from 'zk-ui';


export default () => (
    <Fragment>
        <Tooltip content='Text content' position='top' />
        <Tooltip content='Text content' position='right' />
        <Tooltip content='Text content' position='bottom' />    {/* default */}
        <Tooltip content='Text content' position='left' />
        <Tooltip content='text content on click' noHover>
            <Link pseudo>Click me</Link>
        </Tooltip>
    </Fragment>
);

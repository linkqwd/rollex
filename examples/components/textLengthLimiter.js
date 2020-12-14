import React from 'react';
import { TextLengthLimiter } from 'zk-ui';


export default () => (
    <TextLengthLimiter
        content='Long text content'
        max={12}
        position='right'
    />
);

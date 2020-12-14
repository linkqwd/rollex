import React, { Fragment } from 'react';
import { Message } from 'zk-ui';


export default () => (
    <Fragment>
        <Message bottomIndent theme='green'>Example message</Message>
        <Message bottomIndent theme='red'>Example message</Message>
        <Message bottomIndent theme='yellow'>Example message</Message>
        <Message theme='lightBlue'>Example message</Message>
    </Fragment>
);

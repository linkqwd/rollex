import React, { Fragment } from 'react';
import { Link } from 'zk-ui';
import { NoteIcon } from 'zk-ui/icons';


export default () => (
    <Fragment>
        <Link href='#'>
            Link
        </Link>
        <Link href='#' pseudo>
            Pseudo link
        </Link>
        <Link href='#' pseudo before={<NoteIcon />}>
            Pseudo link
        </Link>
    </Fragment>
);

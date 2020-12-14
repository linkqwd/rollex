import React from 'react';
import { Svg } from '../svg';


export const CategoryIcon = (props) => (
    <Svg viewBox='0 0 24 24' {...props}>
        <path d='M2,11h9V2H2V11z M4,4h5v5H4V4z' />
        <path d='M13,2v9h9V2H13z M20,9h-5V4h5V9z' />
        <path d='M2,22h9v-9H2V22z M4,15h5v5H4V15z' />
        <path d='M13,22h9v-9h-9V22z M15,15h5v5h-5V15z' />
    </Svg>
);

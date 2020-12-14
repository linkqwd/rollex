import React from 'react';
import { Svg } from '../svg';


export const ArrowDownIcon = (props) => (
    <Svg viewBox='0 0 16 9.41' {...props}>
        <path d='M8,9.41.29,1.71A1,1,0,0,1,1.71.29L8,6.59,14.29.29a1,1,0,1,1,1.42,1.42Z' />
    </Svg>
);

export const ArrowUpIcon = (props) => (
    <Svg viewBox='0 0 16 9.41' {...props}>
        <path d='M15,9.41a1,1,0,0,1-.71-.29L8,2.83,1.71,9.12a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.41L8,0l7.71,7.71a1,1,0,0,1,0,1.41A1,1,0,0,1,15,9.41Z' />
    </Svg>
);

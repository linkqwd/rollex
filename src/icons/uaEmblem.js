import React from 'react';
import { Svg } from '../svg';


export const UaEmblem = ({ active, ...rest }) => (
    <Svg viewBox='0 0 24 24' {...rest}>
        {
            active ?
                <path d='M17 17.5v1c0 .6-.4 1-1 1s-1-.4-1-1v-1h-3v-6c0-.6.4-1 1-1s1 .4 1 1v4h1v-6c0-.6.4-1 1-1s1 .4 1 1v6h1v-4c0-.6.4-1 1-1s1 .4 1 1v6h-3zm7-12H8v11c.1 2.4 1.2 4.2 3 5l5 3 5-3c1.8-.8 2.9-2.6 3-5v-11z' />
                :
                <path d='M15 18.5c0 .6.4 1 1 1s1-.4 1-1v-1h3v-6c0-.6-.4-1-1-1s-1 .4-1 1v4h-1v-6c0-.6-.4-1-1-1s-1 .4-1 1v6h-1v-4c0-.6-.4-1-1-1s-1 .4-1 1v6h3v1zm-7-13v11.1c0 2.1 1.2 4.1 3.1 5.1l5 2.8 4.9-2.9c1.8-1 3-2.9 3-4.9V5.5H8zm14 11.1c0 1.4-.8 2.7-2 3.4l-4 2.2-4-2.2c-1.2-.7-2-2-2-3.4V7.5h12v9.1z' />
        }
    </Svg>
);

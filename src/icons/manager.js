import React from 'react';
import { Svg } from '../svg';


export const ManagerIcon = ({ active, ...rest }) => (
    <Svg viewBox='0 0 20 20' {...rest}>
        {
            active ?
                <path
                    d='M13.65 11.76a6 6 0 1 0-7.28 0A10.47 10.47 0 0 0 0 21h20a10.47 10.47 0 0 0-6.35-9.24zM10 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8z'
                />
                :
                <path
                    d='M17 7a6 6 0 1 0-9.9 4.55A8.28 8.28 0 0 0 1 20a1 1 0 0 0 2 0c0-4.38 3-7 8-7a6 6 0 0 0 6-6zm-6 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm9 5a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2z'
                />
        }
    </Svg>
);

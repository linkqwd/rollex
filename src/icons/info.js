import React from 'react';
import { Svg } from '../svg';


export const InfoIcon = ({ active, ...rest }) => (
    <Svg viewBox='0 0 22 22' {...rest}>
        {
            active ?
                <path
                    d='M11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm-.61,7.7a1.58,1.58,0,0,1-1.6-1.6,1.67,1.67,0,0,1,1.6-1.7A1.61,1.61,0,0,1,12,6.1a1.52,1.52,0,0,1-1.6,1.6Zm-1.6,3.2a1,1,0,1,1,0-2H11a1,1,0,0,1,1,1v4.5h1.2a1,1,0,0,1,0,2H8.79a1,1,0,0,1,0-2H10V10.9Z'
                />
                :
                <path
                    d='M10.03.03c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10a10 10 0 0 0-10-10zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm2-5a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1v-3h-1a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1v4h1zm-2.5-6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z'
                />
        }
    </Svg>
);
import React from 'react';
import { Svg } from '../svg';


export const ClockIcon = ({ active, ...rest }) => (
    <Svg viewBox='0 0 20 20' {...rest}>
        {
            active ?
                <path
                    d='M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4 12H9V6a1 1 0 1 1 2 0v4h3a1 1 0 0 1 0 2z'
                />
                :
                <path
                    d='M14 10h-3V6a1 1 0 0 0-2 0v6h5a1 1 0 0 0 0-2zM10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10A10 10 0 0 0 10 0zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z'
                />
        }
    </Svg>
);

import React from 'react';
import { Svg } from '../svg';


export const CheckmarkIcon = ({ active, ...rest }) => (
    <Svg viewBox='0 0 20 20' {...rest}>
        {
            active ?
                <path d='M9 13.49l-2.74-2.74a1 1 0 1 1 1.41-1.41L9 10.67l3.83-3.83a1 1 0 1 1 1.41 1.41L9 13.49zM10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0z' />
                :
                <path d='M12.83 6.83L9 10.66 7.67 9.33a1 1 0 1 0-1.41 1.41L9 13.48l5.24-5.24a1 1 0 1 0-1.41-1.41zM10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10A10 10 0 0 0 10 0zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z' />
        }
    </Svg>
);

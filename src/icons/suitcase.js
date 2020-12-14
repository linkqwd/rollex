import React from 'react';
import { Svg } from '../svg';


export const SuitcaseIcon = ({ active, ...rest }) => (
    <Svg viewBox='0 0 20 20' {...rest}>
        {
            active ?
                <path
                    d='M14 4a4 4 0 1 0-8 0H0v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V4h-6zm-4-2a2 2 0 0 1 2 2H8a2 2 0 0 1 2-2zm8 15a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6.61l8 2.67 8-2.67V17z'
                />
                :
                <path
                    d='M14 4a4 4 0 1 0-8 0H0v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V4h-6zm-4-2a2 2 0 0 1 2 2H8a2 2 0 0 1 2-2zM6 6h12v2.28l-8 2.67-8-2.67V6h4zm11 12H3a1 1 0 0 1-1-1v-6.61l8 2.67 8-2.67V17a1 1 0 0 1-1 1z'
                />
        }
    </Svg>
);

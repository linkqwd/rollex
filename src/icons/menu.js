import React from 'react';
import { Svg } from '../svg';


export const MenuIcon = ({ active, ...rest }) => (
    <Svg viewBox='0 0 5 21' {...rest}>
        <g>
            <circle cx='2.5' cy='18.5' r='2.5' />
            <circle cx='2.5' cy='10.5' r='2.5' />
            <circle cx='2.5' cy='2.5' r='2.5' />
        </g>
    </Svg>
);


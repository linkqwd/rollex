import React from 'react';
import { Svg } from '../svg';


export const EnvelopeIcon = ({ active, ...rest }) => (
    active ?
        <Svg viewBox='0 0 20 20' {...rest}>
            <path
                d='M10 0L0 7.87v10.1a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7.87L10 0zM5.37 13.66l-3.37 3v-6.38l3.37 3.38zM10 12.21L16.53 18h-13L10 12.21zm4.64 1.44L18 10.28v6.34l-3.36-2.97zm2.58-5.4l-4.07 4.07L10 9.53l-3.14 2.79-4.08-4.08 7.21-5.7 7.23 5.71z'
            />
        </Svg>
        :
        <Svg viewBox='0 0 20 20' {...rest}>
            <path
                d='M18 2H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-8 8.59L3.41 4h13.17L10 10.59zm-3.61-.78l-4.39 4v-8.4l4.39 4.4zm1.42 1.42L10 13.41l2.34-2.34L16.49 15H3.61l4.2-3.77zm6-1.56L18 5.41v8.26l-4.19-4z'
            />
        </Svg>
);

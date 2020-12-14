import React from 'react';
import { Svg } from '../svg';


export const ContractIcon = ({ active, ...rest }) => (
    active ?
        <Svg viewBox='0 0 21 20' {...rest}>
            <path
                  d='M6 .08v3.57A2.38 2.38 0 0 1 3.62 6H.05L6 .08zM11 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-1 6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2h5zm0 4a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2h5zm2.33-13H4.7L0 4.52v13.23A2.33 2.33 0 0 0 2.11 20h10.22c1.2 0 2.67-1 2.67-2.25V2.32A2.76 2.76 0 0 0 12.33 0z'
            />
            <path d='M19 4V2a1 1 0 0 0-2 0v16a1 1 0 0 0 2 0V5.11l1 .52V12a.5.5 0 1 0 1 0V5l-2-1z' />
        </Svg>
        :
        <Svg viewBox='0 0 21 20' {...rest}>
            <path
                d='M13 0H5.59L1 4.59V17a2.83 2.83 0 0 0 2.63 3H13a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zM6 2.41V4a1 1 0 0 1-1 1H3.41L6 2.41zM14 17a1 1 0 0 1-1 1H3.63a.91.91 0 0 1-.62-1V7h2a3 3 0 0 0 3-3V2h5a1 1 0 0 1 1 1v14H14z'
            />
            <circle cx='12' cy='4' r='1' />
            <path
                d='M11 9H6a1 1 0 1 0 0 2h5a1 1 0 0 0 0-2zM11 13H6a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2zM19 4V2a1 1 0 0 0-2 0v16a1 1 0 0 0 2 0V5.11l1 .52V12a.5.5 0 1 0 1 0V5l-2-1z'
            />
        </Svg>
);

import React from 'react';
import { Svg } from '../svg';


export const PlanIcon = ({ active, ...rest }) => (
    <Svg viewBox='0 0 20 20' {...rest}>
        {
            active ?
                <path
                    d='M15 10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2h10zm0 3a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2h10zm1-9V2h-5V1a1 1 0 0 0-2 0v1H4v2H0v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V4h-4zm2 13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6h2v2h12V6h2v11z'
                />
                :
                <path
                    d='M16 4V2h-5V1a1 1 0 0 0-2 0v1H4v2H0v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V4h-4zm-2 0v2H6V4h8zm1 6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2h10zm0 3a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2h10zm3 4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6h2v2h12V6h2v11z'
                />
        }
    </Svg>
);

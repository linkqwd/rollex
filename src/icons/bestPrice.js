import React from 'react';
import { Svg } from '../svg';


export const BestPriceIcon = ({ active, ...rest }) => (
    <Svg viewBox='0 0 20 20' {...rest}>
        {
            active ?
                <path
                    d='M19.44 3.56a3.16 3.16 0 0 0-2.53-2.53 2.1 2.1 0 0 0-1.83.55l-2.26 2.25h-3.5a2.34 2.34 0 0 0-1.17.28L.63 11.66a2.28 2.28 0 0 0 .1 3.17l4.83 4.84a2.4 2.4 0 0 0 1.69.72 2.12 2.12 0 0 0 1.48-.56l7.56-7.51a2 2 0 0 0 .44-1.49V7.65h.06l2.11-2.21a2.1 2.1 0 0 0 .54-1.88zm-2 .44l-.88.93a1.57 1.57 0 0 0-1-1l.94-.94a.86.86 0 0 1 .69.31.84.84 0 0 1 .27.7h-.02z'
                />
                :
                <path
                    d='M19.44 3.56a3 3 0 0 0-.87-1.66 3 3 0 0 0-1.66-.87 2.1 2.1 0 0 0-1.83.55l-2.26 2.25h-3.5a2.34 2.34 0 0 0-1.17.28L.63 11.66a2.28 2.28 0 0 0 .1 3.17l4.83 4.84a2.4 2.4 0 0 0 1.69.72 2.12 2.12 0 0 0 1.48-.56l7.56-7.51a2 2 0 0 0 .44-1.49V7.65h.06l2.11-2.21a2.1 2.1 0 0 0 .54-1.88zm-4.71 7.34v.2l-7.32 7.3a.17.17 0 0 1-.11 0 .41.41 0 0 1-.28-.13l-4.83-4.83a.41.41 0 0 1-.13-.27.31.31 0 0 1 0-.16l7.13-7.18h1.75a2.19 2.19 0 0 0-.21 1.39 3 3 0 0 0 .86 1.61A1 1 0 0 0 13 7.42a1 1 0 0 1-.27-.59l1-1h1v5.07zM17.46 4l-.88.93a1.57 1.57 0 0 0-1-1l.94-.94a.85.85 0 0 1 .69.31.84.84 0 0 1 .25.7z'
                />
        }
    </Svg>
);
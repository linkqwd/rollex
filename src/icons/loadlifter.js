import React from 'react';
import { Svg } from '../svg';


export const LoadlifterIcon = ({ active, ...rest }) => (
    <Svg viewBox='0 0 23 20' {...rest}>
        {
            active ?
                <path
                    d='M15.43 13L10.98 1a1.5 1.5 0 0 0-1.41-1H2.01v8h-2v8.11a2 2 0 0 0 2 1.89h.27a3 3 0 0 0 5.63 0h2.15a2.5 2.5 0 0 0 4.9 0h2.33l-1.84-5h-.02zM1.99 10h3a1 1 0 0 1 1 1v2h7.3l1 2.83a2.48 2.48 0 0 0-3.83.17H7.85a3 3 0 0 0-5.63 0h-.27v-6h.04zm3.08 8a1 1 0 1 1 .01 0h-.01zm7.42 0a.5.5 0 1 1 .01 0h-.01zM22 16a1 1 0 0 1 0 2h-3.69L11.96 1.36a1 1 0 1 1 1.87-.71L19.69 16H22z'
                />
                :
                <path
                    d='M16.44 13L12.11 1.31A2 2 0 0 0 10.23 0H3v8H1v8.11A2 2 0 0 0 3 18h.27a3 3 0 0 0 5.63 0h2.15a2.5 2.5 0 0 0 4.9 0h2.33l-1.84-5zM5 2h5.21l3.33 9H9a3 3 0 0 0-3-3H5V2zm-2 8h3a1 1 0 0 1 1 1v2h7.3l1 2.83a2.48 2.48 0 0 0-3.83.17H8.9a3 3 0 0 0-5.63 0H3v-6zm3.08 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm7.42 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.5-2a1 1 0 0 1 0 2h-3.69L13 1.36a1 1 0 0 1 1.87-.71L20.69 16H23z'
                />
        }
    </Svg>
);

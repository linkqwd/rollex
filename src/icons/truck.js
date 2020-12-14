import React from 'react';
import { Svg } from '../svg';


export const Truck = ({ active, ...rest }) => (
    <Svg viewBox='0 0 24 24' {...rest}>
        {
            active ?
                <path
                    d='M18.9 11.7l-1-6.2H13v-2c0-.6-.4-1-1-1s-1 .4-1 1H1v13.8c0 1.2 1 2.2 2.2 2.2h.9c.4 1.2 1.6 2 2.8 2s2.4-.8 2.8-2h4.4c.4 1.2 1.6 2 2.8 2 1.3 0 2.4-.8 2.8-2 1.8 0 3.2-1.5 3.2-3.2v-3.6l-4-1zm2.1 4.6c0 .7-.5 1.2-1.2 1.2-.4-1.2-1.6-2-2.8-2-1.3 0-2.4.8-2.8 2H9.8c-.4-1.2-1.6-2-2.8-2s-2.4.8-2.8 2h-1c-.1 0-.2-.1-.2-.2v-2.8h7.6c.6 0 1.2-.3 1.7-.7.5-.4.7-1.1.7-1.7V7.5h3.1l1 5.8 3.9 1v2z'
                />
                :
                <path
                    d='M18.9 11.7l-1-6.2H13v-2c0-.6-.4-1-1-1s-1 .4-1 1H1v13.8c0 1.2 1 2.2 2.2 2.2h.9c.4 1.2 1.6 2 2.8 2s2.4-.8 2.8-2h4.4c.4 1.2 1.6 2 2.8 2 1.3 0 2.4-.8 2.8-2 1.8 0 3.2-1.5 3.2-3.2v-3.6l-4-1zM8 9.5h3v2c0 .6-.4 1-1 1H8v-3zm-5-4h8v2H3v-2zm0 4h3v3H3v-3zm4 10c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm10 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm4-3.2c0 .7-.5 1.2-1.2 1.2-.4-1.2-1.6-2-2.8-2-1.3 0-2.4.8-2.8 2H9.8c-.4-1.2-1.6-2-2.8-2s-2.4.8-2.8 2h-1c-.1 0-.2-.1-.2-.2v-2.8h7c1.7 0 3-1.3 3-3v-4h3.1l1 5.8 3.9 1v2z'
                />
        }
    </Svg>
);
import React from 'react';
import { Svg } from '../svg';


export const GoogleDriveIcon = (props) => (
    <Svg viewBox='0 0 139 120.4' {...props}>
        <radialGradient
            id='googleDrive1' cx='-254.81979' cy='705.83588'
            gradientTransform='matrix(2.827 1.6322 -1.6322 2.827 2092.1199 -1494.5786)'
            gradientUnits='userSpaceOnUse'
            r='82.978401'
        >
            <stop offset='0' stopColor='#4387fd' />
            <stop offset='.65' stopColor='#3078f0' />
            <stop offset='.9099' stopColor='#2b72ea' />
            <stop offset='1' stopColor='#286ee6' />
        </radialGradient>
        <radialGradient
            id='googleDrive2' cx='-254.8174' cy='705.83691'
            gradientTransform='matrix(2.827 1.6322 -1.6322 2.827 2092.1199 -1494.5786)'
            gradientUnits='userSpaceOnUse'
            r='82.973'
        >
            <stop offset='0' stopColor='#ffd24d' />
            <stop offset='1' stopColor='#f6c338' />
        </radialGradient>
        <path d='m24.2 120.4-24.2-41.9 45.3-78.5 24.2 41.9z' fill='#0da960' />
        <path d='m24.2 120.4 24.2-41.9h90.6l-24.2 41.9z' fill='url(#googleDrive1)' />
        <path d='m139 78.5h-48.4l-45.3-78.5h48.4z' fill='url(#googleDrive2)' />
        <path d='m69.5 78.5h-21.1l10.5-18.3-34.7 60.2z' fill='#2d6fdd' />
        <path d='m90.6 78.5h48.4l-58.9-18.3z' fill='#e5b93c' />
        <path d='m58.9 60.2 10.6-18.3-24.2-41.9z' fill='#0c9b57' />
    </Svg>
);

import fs from 'fs';
import React from 'react';

import CompEx from './componentExample';

import Box from '../box';
//
// import Breadcrumb from '../breadcrumb';
// import Button from '../button';
// import Card from '../card';
// import Definition from '../definitioin';
// import Dialog from '../dialog';
// import DatePicker from '../datepicker';
// import Divider from '../divider';
// import Dropdown from '../dropdown';
// import Error from '../error';
// import FileIcon from '../fileIcon';
// import Grid from '../grid';
// import Icons from '../icons';
// import Input from '../input';
// import LinearProgress from '../linearProgress';
// import Link from '../link';
// import List from '../list';
// import Message from '../message';
// import NumberInput from '../numberInput';
// import RadioGroup from '../radioGroup';
// import SelectionFields from '../selectionFields';
// import Spinner from '../spinner';
// import Table from '../table';
// import Tag from '../tag';
// import Textarea from '../textarea';
// import Typography from '../typography';
// import TextLengthLimiter from '../textLengthLimiter';
// import Tooltip from '../tooltip';
// import Tree from '../tree';
// import Layout from '../layout';
// import MultiSelect from '../multiSelect';


export const routes = [
    { name: 'LAYOUT' },
    //
    // {
    //     name: 'Layout',
    //     path: '/',  // TODO: change when introduction section will be added
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Page layout'
    //             component={Layout}
    //             code={fs.readFileSync(`${__dirname}/../layout.js`, 'utf8')}
    //             flexDirection='column'
    //         />
    //     ),
    // },
    //
    // {
    //     name: 'Typography',
    //     path: '/text',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Text layout'
    //             component={Typography}
    //             code={fs.readFileSync(`${__dirname}/../typography.js`, 'utf8')}
    //             flexDirection='column'
    //         />
    //     ),
    // },
    //
    // {
    //     name: 'Grid',
    //     path: '/grid',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Grid'
    //             component={Grid}
    //             code={fs.readFileSync(`${__dirname}/../grid.js`, 'utf8')}
    //         />
    //     ),
    // },

    {
        name: 'Box',
        path: '/box',
        exact: true,
        component: () => (
            <CompEx
                title='Box'
                component={Box}
                code={fs.readFileSync(`${__dirname}/../box.js`, 'utf8')}
                flexDirection='column'
            />
        ),
    },

    // { name: 'NAVIGATION' },

    //
    // {
    //     name: 'Breadcrumb',
    //     path: '/breadcrumb',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Breadcrumb'
    //             component={Breadcrumb}
    //             code={fs.readFileSync(`${__dirname}/../breadcrumb.js`, 'utf8')}
    //         />
    //     ),
    // },
    //
    // {
    //     name: 'Link',
    //     path: '/link',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Link'
    //             component={Link}
    //             code={fs.readFileSync(`${__dirname}/../link.js`, 'utf8')}
    //         />
    //     ),
    // },
    //
    // { name: 'FORM CONTROLS' },
    //
    // {
    //     name: 'Button',
    //     path: '/button',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Button'
    //             component={Button}
    //             code={fs.readFileSync(`${__dirname}/../button.js`, 'utf8')}
    //         />
    //     ),
    // },
    //
    // {
    //     name: 'Selection',
    //     path: '/selection',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Selection'
    //             component={SelectionFields}
    //             code={fs.readFileSync(`${__dirname}/../selectionFields.js`, 'utf8')}
    //         />
    //     ),
    // },
    //
    // {
    //     name: 'Radio group',
    //     path: '/radio-group',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Radio group'
    //             component={RadioGroup}
    //             code={fs.readFileSync(`${__dirname}/../radioGroup.js`, 'utf8')}
    //         />
    //     ),
    // },
    //
    // {
    //     name: 'Dropdown',
    //     path: '/dropdown',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Dropdown'
    //             component={Dropdown}
    //             code={fs.readFileSync(`${__dirname}/../dropdown.js`, 'utf8')}
    //         />
    //     ),
    // },
    //
    // {
    //     name: 'Input',
    //     path: '/input',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Input'
    //             component={Input}
    //             code={fs.readFileSync(`${__dirname}/../input.js`, 'utf8')}
    //         />
    //     ),
    // },
    //
    // {
    //     name: 'MultiSelect',
    //     path: '/multiSelect',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='MultiSelect'
    //             component={MultiSelect}
    //             code={fs.readFileSync(`${__dirname}/../multiSelect.js`, 'utf8')}
    //         />
    //     ),
    // },
    //
    // {
    //     name: 'Number',
    //     path: '/number-input',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Input'
    //             component={NumberInput}
    //             code={fs.readFileSync(`${__dirname}/../numberInput.js`, 'utf8')}
    //         />
    //     ),
    // },
    //
    // {
    //     name: 'Date and time',
    //     path: '/datepicker',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Date and time pickers'
    //             component={DatePicker}
    //             code={fs.readFileSync(`${__dirname}/../datepicker.js`, 'utf8')}
    //         />
    //     ),
    // },
    //
    // {
    //     name: 'Textarea',
    //     path: '/textarea',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Textarea'
    //             component={Textarea}
    //             code={fs.readFileSync(`${__dirname}/../textarea.js`, 'utf8')}
    //         />
    //     ),
    // },
    //
    // {
    //     name: 'Error',
    //     path: '/error',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Error'
    //             component={Error}
    //             code={fs.readFileSync(`${__dirname}/../error.js`, 'utf8')}
    //         />
    //     ),
    // },
    //
    // { name: 'DATA DISPLAY' },
    //
    // {
    //     name: 'Card',
    //     path: '/card',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Card'
    //             component={Card}
    //             grow={1}
    //             code={fs.readFileSync(`${__dirname}/../card.js`, 'utf8')}
    //         />
    //     ),
    // },
    //
    // {
    //     name: 'Definition',
    //     path: '/definition',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Definition'
    //             component={Definition}
    //             code={fs.readFileSync(`${__dirname}/../definitioin.js`, 'utf8')}
    //         />
    //     ),
    // },
    //
    // {
    //     name: 'Divider',
    //     path: '/divider',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Divider'
    //             component={Divider}
    //             code={fs.readFileSync(`${__dirname}/../divider.js`, 'utf8')}
    //         />
    //     ),
    // },
    //
    // {
    //     name: 'File icon',
    //     path: '/file-icon',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='File icon'
    //             component={FileIcon}
    //             code={fs.readFileSync(`${__dirname}/../fileIcon.js`, 'utf8')}
    //         />
    //     ),
    // },
    //
    // {
    //     name: 'Icons',
    //     path: '/icons',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Icons'
    //             component={Icons}
    //             code={fs.readFileSync(`${__dirname}/../icons.js`, 'utf8')}
    //         />
    //     ),
    // },
    //
    // {
    //     name: 'List',
    //     path: '/list',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='List'
    //             component={List}
    //             flexDirection='column'
    //             code={fs.readFileSync(`${__dirname}/../list.js`, 'utf8')}
    //         />
    //     ),
    // },
    //
    // {
    //     name: 'Table',
    //     path: '/table',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Table'
    //             component={Table}
    //             code={fs.readFileSync(`${__dirname}/../table.js`, 'utf8')}
    //         />
    //     ),
    // },
    //
    // {
    //     name: 'Tag',
    //     path: '/tag',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Tag'
    //             component={Tag}
    //             code={fs.readFileSync(`${__dirname}/../tag.js`, 'utf8')}
    //         />
    //     ),
    // },
    //
    // {
    //     name: 'Tooltip',
    //     path: '/tooltip',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Tooltip'
    //             component={Tooltip}
    //             code={fs.readFileSync(`${__dirname}/../tooltip.js`, 'utf8')}
    //             justifyContent='center'
    //         />
    //     ),
    // },
    //
    // {
    //     name: 'Text length limiter',
    //     path: '/text-length-limiter',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Text length limiter'
    //             component={TextLengthLimiter}
    //             code={fs.readFileSync(`${__dirname}/../textLengthLimiter.js`, 'utf8')}
    //         />
    //     ),
    // },
    //
    // {
    //     name: 'Tree',
    //     path: '/tree',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Tree'
    //             component={Tree}
    //             code={fs.readFileSync(`${__dirname}/../tree.js`, 'utf8')}
    //         />
    //     ),
    // },
    //
    // { name: 'FEEDBACK' },
    //
    // {
    //     name: 'Dialog',
    //     path: '/dialog',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Dialog'
    //             component={Dialog}
    //             code={fs.readFileSync(`${__dirname}/../dialog.js`, 'utf8')}
    //         />
    //     ),
    // },
    //
    // {
    //     name: 'Spinner',
    //     path: '/spinner',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Spinner'
    //             component={Spinner}
    //             code={fs.readFileSync(`${__dirname}/../spinner.js`, 'utf8')}
    //         />
    //     ),
    // },
    //
    // {
    //     name: 'Message',
    //     path: '/message',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Message'
    //             component={Message}
    //             code={fs.readFileSync(`${__dirname}/../message.js`, 'utf8')}
    //             flexDirection='column'
    //         />
    //     ),
    // },
    //
    // {
    //     name: 'Linear progress',
    //     path: '/linear-progress',
    //     exact: true,
    //     component: () => (
    //         <CompEx
    //             title='Linear progress'
    //             component={LinearProgress}
    //             code={fs.readFileSync(`${__dirname}/../linearProgress.js`, 'utf8')}
    //         />
    //     ),
    // },
];

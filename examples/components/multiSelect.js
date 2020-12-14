import React from 'react';
import { MultiSelect, Box } from 'zk-ui';


export default () => (
    <Box>
        <Box mb='20px'>
            <MultiSelect
                options={[{label: 'One', value: 1}, {label: 'Two', value: 2}]}
            />
        </Box>
        <Box mb='20px'>
            <MultiSelect
                options={[{label: 'One', value: 1}, {label: 'Two', value: 2}]}
                selected={[{label: 'One', value: 1}]}
            />
        </Box>
         <Box mb='20px'>
            <MultiSelect
                selected={[{label: 'Two', value: 2}]}
            />
        </Box>
    </Box>
);

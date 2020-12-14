import React from 'react';
import { RadioGroup } from 'zk-ui';


export default () => (
    <RadioGroup
        required
        label='Season'
        name='season'
        checked='winter'
        options={[
            { value: 'winter', label: 'Winter' },
            { value: 'spring', label: 'Spring' },
            { value: 'summer', label: 'Summer' },
            { value: 'fall', label: 'Fall' },
        ]}
        hint={(value) => `Value: ${value}`}
    />
);

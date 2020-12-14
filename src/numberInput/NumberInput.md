DEPRECATED!  
Use [NumberInputAlt](/#/Elements/NumberInputAlt) instead.

See: https://github.com/nosir/cleave.js/blob/master/doc/options.md#numerals
for available cleave.js options.

```js
import { FormField, NumberInput } from 'zk-ui';
import { WalletIcon } from 'zk-ui/icons';


<>
    <FormField>
        <NumberInput
            before={<WalletIcon />}
            label='Price'
            name='price'
            placeholder='Enter price'
            hint='Price should be greater than 1000'
        />
    </FormField>
    <FormField>
        <NumberInput
            disabled
            label='Price'
            name='price'
            placeholder='Enter price'
        />
    </FormField>
    <FormField>
        <NumberInput
            label='Price'
            name='price'
            placeholder='Enter price'
            error={(name) => `Error in field: ${name}`}
        />
    </FormField>
</>
```

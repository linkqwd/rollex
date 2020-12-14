Based on [react-number-format](https://github.com/s-yadav/react-number-format).
There you can see all available NumberFormat options.  
`before, after, hint, error, etc.` props passes to [Input](/#/Elements/Input)

```js
import { FormField, NumberInputAlt } from 'zk-ui';
import { WalletIcon } from 'zk-ui/icons';


<>
    <FormField>
        <NumberInputAlt
            before={<WalletIcon />}
            label='Price'
            name='price'
            placeholder='Enter price'
            hint='Price should be greater than 1000'
        />
    </FormField>
    <FormField>
        <NumberInputAlt
            disabled
            label='Price'
            name='price'
            placeholder='Enter price'
        />
    </FormField>
    <FormField>
        <NumberInputAlt
            label='Price'
            name='price'
            placeholder='Enter price'
            error={(name) => `Error in field: ${name}`}
        />
    </FormField>
    <FormField>
        <NumberInputAlt
            label='Price decimal'
            name='price'
            placeholder='Enter price'
            decimalScale={true}
            allowedDecimalSeparators={[',', '.']}
            value={1000.33}
        />
    </FormField>
</>
```

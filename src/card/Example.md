```js
import { 
    Card, CardHeader, CardSection, FormField, Input, Textarea, Divider, 
} from 'zk-ui';

<Card withBorder>
    <CardHeader>
        Information
    </CardHeader>
    <CardSection>
        <FormField>
            <Input
                label='Title'
                name='title'
                type='text'
            />
        </FormField>
        <FormField>
            <Textarea
                label='Description'
                name='description'
                hint='Note length should be less than 100 symbols'
                maxLength={100}
            />
        </FormField>
    </CardSection>
    <Divider />
    <CardSection>
        <Card secondary data-qa='qa-selector'>
            <CardHeader>
                Additional
            </CardHeader>
            <CardSection>
                <FormField>
                    <Input
                        label='Address'
                        name='address'
                        type='text'
                    />
                </FormField>
                <FormField>
                    <Textarea
                        label='Note'
                        name='note'
                        hint='Note length should be less than 100 symbols'
                        maxLength={100}
                    />
                </FormField>
            </CardSection>
        </Card>
    </CardSection>
</Card>
```

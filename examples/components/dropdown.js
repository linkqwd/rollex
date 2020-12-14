import React from 'react';
import { Form, FormField, Dropdown, DropdownShift } from 'zk-ui';


export default () => (
    <Form>
        <FormField>
            <DropdownShift
                label='Dropdown with search'
                required
                name='items'
                searchable
                inputDataQa='inputDataQa'
                dataQa='dataQa'
                selected='aa'
                noItemsText='No items found'
                options={[
                    { value: 'aa', label: 'Apple' },
                    { value: 'bb', label: 'Banana' },
                    { value: 'cc', label: 'Cherry' },
                    { value: 'dd', label: 'Pineapple' },
                ]}
                onChange={e => console.log(e.target.value)}
                hint={selected => `Selected: ${selected}`}
            />
        </FormField>
        <FormField>
            <Dropdown
                label='Simple dropdown'
                required
                name='items'
                selected='3'
                dropdownPlaceholder='Choose value'
                options={[
                    { value: '1', label: 'One' },
                    { value: '2', label: 'Two' },
                    { value: '3', label: 'Three' },
                    { value: '4', label: 'Four' },
                ]}
                noItemsText='no items found'
                hint={selected => `Selected: ${selected}`}
            />
        </FormField>
        <FormField>
            <Dropdown
                label='Simple dropdown with error'
                name='items'
                selected=''
                noItemsText='No items found'
                error='You should choose a car'
                dropdownPlaceholder='Choose your car'
                options={[
                    { value: 'bmw', label: 'BMW' },
                    { value: 'сhevrolet', label: 'Chevrolet' },
                    { value: 'audi', label: 'Audi' },
                    { value: 'porsche', label: 'Porsche' },
                ]}
            />
        </FormField>
    </Form>
);

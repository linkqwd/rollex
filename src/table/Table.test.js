import React from 'react';
import { mount } from 'enzyme';
import { Table, TableBody, TableColumn, TableHeader, TableHeaderColumn, TableRow } from './index';


describe('Test Table component', () => {
    it('should render', () => {
        const wrapper = mount(
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>
                            ID
                        </TableHeaderColumn>
                        <TableHeaderColumn>
                            Name
                        </TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody stripe size='small'>
                    <TableRow>
                        <TableColumn>1</TableColumn>
                        <TableColumn>John</TableColumn>
                    </TableRow>
                    <TableRow>
                        <TableColumn>2</TableColumn>
                        <TableColumn>James</TableColumn>
                    </TableRow>
                    <TableRow>
                        <TableColumn>3</TableColumn>
                        <TableColumn>Bill</TableColumn>
                    </TableRow>
                    <TableRow>
                        <TableColumn>4</TableColumn>
                        <TableColumn>Sam</TableColumn>
                    </TableRow>
                </TableBody>
            </Table>
        );

        expect(wrapper.find(`table`).exists()).toEqual(true);
    });
});

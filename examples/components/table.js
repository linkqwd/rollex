import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableColumn, TableHeaderColumn } from 'zk-ui';


export default () => (
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
        <TableBody>
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

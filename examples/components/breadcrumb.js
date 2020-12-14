import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'zk-ui';


export default () => (
    <Breadcrumb separator='/'>
        <BreadcrumbItem>One</BreadcrumbItem>
        <BreadcrumbItem>Two</BreadcrumbItem>
        <BreadcrumbItem active>Three</BreadcrumbItem>
    </Breadcrumb>
);

import React from 'react';
import {
    Definition, DefinitionItem,
    DefinitionTerm, DefinitionValue,
} from 'zk-ui';


export default () => (
    <Definition>
        <DefinitionItem>
            <DefinitionTerm>First term</DefinitionTerm>
            <DefinitionValue>First value</DefinitionValue>
        </DefinitionItem>
        <DefinitionItem>
            <DefinitionTerm>Second term</DefinitionTerm>
            <DefinitionValue>Second value</DefinitionValue>
        </DefinitionItem>
        <DefinitionItem>
            <DefinitionTerm>Third term</DefinitionTerm>
            <DefinitionValue>Third value</DefinitionValue>
        </DefinitionItem>
    </Definition>
);

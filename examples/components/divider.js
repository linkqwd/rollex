import React from 'react';
import { Divider, LayoutParagraph } from 'zk-ui';

import { LayoutSection } from "./utils/componentExample";


export default () => (
    <LayoutSection>
        <LayoutParagraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea excepturi expedita illum nisi porro
            quas qui quia quo tempore! Enim esse maiores repellat soluta. Aliquam exercitationem ipsum omnis quia.
        </LayoutParagraph>

        <Divider />

        <LayoutParagraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea excepturi expedita illum nisi porro
            quas qui quia quo tempore! Enim esse maiores repellat soluta. Aliquam exercitationem ipsum omnis quia.
        </LayoutParagraph>
    </LayoutSection>
);

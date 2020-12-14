import React, { Fragment } from 'react';
import {
    LayoutHead, LayoutSubhead,
    LayoutSubsubhead, LayoutParagraph,
} from 'zk-ui';

import { LayoutSection } from './utils/componentExample';


export default () => (
    <Fragment>
        <LayoutHead>
            Page title
        </LayoutHead>
        <LayoutSection>
            <LayoutSubhead>
                Section header
            </LayoutSubhead>
            <LayoutParagraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur consequuntur, doloribus
                explicabo qui rerum veniam! Aperiam esse eum fuga ipsa magnam. Delectus, dicta error ipsum quibusdam
                suscipit voluptatem. Repellat.
            </LayoutParagraph>
            <LayoutParagraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores beatae eveniet expedita
                facilis necessitatibus officia perferendis sed sint vel! Aliquid error impedit itaque molestiae
                necessitatibus non omnis sunt temporibus?
            </LayoutParagraph>
        </LayoutSection>
        <LayoutSection>
            <LayoutSubhead bold>
                Section bold header
            </LayoutSubhead>
            <LayoutParagraph marginBottom={30}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores facilis molestiae quis.
                Hic inventore iure labore praesentium, reprehenderit saepe vitae! Dolor ea enim eos ex mollitia
                placeat quia totam!
            </LayoutParagraph>
            <LayoutSubsubhead bold>
                Section sub-header
            </LayoutSubsubhead>
            <LayoutParagraph hint>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus fuga quisquam sapiente
                voluptatibus! Ad amet aperiam consectetur culpa cum error eum fugit hic incidunt, nam ratione
                repellat sit vel.
            </LayoutParagraph>
        </LayoutSection>
        <LayoutSection>
            <LayoutSubhead marginBottom={30}>
                Section header with sub-header right ahead
            </LayoutSubhead>
            <LayoutSubsubhead bold>
                Section sub-header
            </LayoutSubsubhead>
            <LayoutParagraph marginBottom={30}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur consequuntur, doloribus
                explicabo qui rerum veniam! Aperiam esse eum fuga ipsa magnam. Delectus, dicta error ipsum quibusdam
                suscipit voluptatem. Repellat.
            </LayoutParagraph>
            <LayoutSubsubhead bold>
                Section sub-header
            </LayoutSubsubhead>
            <LayoutParagraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores beatae eveniet expedita
                facilis necessitatibus officia perferendis sed sint vel! Aliquid error impedit itaque molestiae
                necessitatibus non omnis sunt temporibus?
            </LayoutParagraph>
        </LayoutSection>
    </Fragment>
);

import React from 'react';
import { Box, Row, Col, LayoutSubhead } from '../../src/';


export default () => (
    <React.Fragment>
        <LayoutSubhead>
            Simple component which can accept props to add margin and padding
        </LayoutSubhead>
        <Box mb='30px'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea excepturi expedita illum nisi porro
            quas qui quia quo tempore! Enim esse maiores repellat soluta. Aliquam exercitationem ipsum omnis quia.
        </Box>

        <Box mb='30px' p='15px'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea excepturi expedita illum nisi porro
            quas qui quia quo tempore! Enim esse maiores repellat soluta. Aliquam exercitationem ipsum omnis quia.
        </Box>
        <Box mb='30px'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea excepturi expedita illum nisi porro
            quas qui quia quo tempore! Enim esse maiores repellat soluta. Aliquam exercitationem ipsum omnis quia.
        </Box>
        <Row>
            <Col grow={1}>
                <Box p='15px'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea excepturi expedita illum nisi porro
                    quas qui quia quo tempore! Enim esse maiores repellat soluta. Aliquam exercitationem ipsum omnis quia.
                </Box>
            </Col>
            <Col grow={1}>
                <Box p='15px'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea excepturi expedita illum nisi porro
                    quas qui quia quo tempore! Enim esse maiores repellat soluta. Aliquam exercitationem ipsum omnis quia.
                </Box>
            </Col>
            <Col grow={1}>
                <Box p='15px'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea excepturi expedita illum nisi porro
                    quas qui quia quo tempore! Enim esse maiores repellat soluta. Aliquam exercitationem ipsum omnis quia.
                </Box>
            </Col>
        </Row>
    </React.Fragment>
);

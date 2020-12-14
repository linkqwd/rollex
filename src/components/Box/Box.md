Simple component which can accept props to add margin and padding


```js
import { Box } from 'zk-ui';

<>
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
</>
```

```js
import { Row, Col, Box } from 'zk-ui';

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
```

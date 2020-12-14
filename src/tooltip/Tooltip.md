```js
import { Tooltip, Link, Row, Col } from 'zk-ui';

<Row>
    <Col>
        <Tooltip content='Text content' position='top' />
    </Col>
    <Col>
        <Tooltip content='Text content' position='right' />
    </Col>
    <Col>
        <Tooltip content='Text content' position='bottom' />    {/* default */}
    </Col>
    <Col>
        <Tooltip content='Text content' position='left' />
    </Col>
    <Col>
        <Tooltip content='text content on click' noHover>
            <Link pseudo>Click me</Link>
        </Tooltip>
    </Col>
</Row>
```

```js
import { Tag, Row, Col } from 'zk-ui';


<Row>
    <Col>
        <Tag
            item={{ id: 42, info: 'With close'}}
            contentRenderer={item => item.info}
            onClose={item => alert(item.id)}
        />
    </Col>
    <Col>
        <Tag item='Example' theme='green' />
    </Col>
    <Col>
        <Tag item='Example' theme='red' />
    </Col>
    <Col>
        <Tag item='Example' theme='orange' />
    </Col>
    <Col>
        <Tag item='Example' theme='lightBlue' />
    </Col>
</Row>
```

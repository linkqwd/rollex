```js
import { Link, Row, Col } from 'zk-ui';
import { NoteIcon } from 'zk-ui/icons';


<Row>
    <Col>
        <Link href='#'>
            Link
        </Link>
    </Col>
    <Col>
        <Link href='#' pseudo>
            Pseudo link
        </Link>
    </Col>
    <Col>
        <Link href='#' pseudo before={<NoteIcon />}>
            Pseudo link
        </Link>
    </Col>
</Row>
```

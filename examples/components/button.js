import React from 'react';
import { Button, LinkButton, Row, Col } from 'zk-ui';


export default () => (
    <div>
        <Row>
            <Col grow={1} basis='auto'>
                <Button primary fullWidth theme='green'>
                    Primary green
                </Button>
            </Col>
            <Col grow={1} basis='auto'>
                <Button fullWidth theme='green'>
                    Secondary green
                </Button>
            </Col>
        </Row>
        <Row>
            <Col grow={1} basis='auto'>
                <Button primary fullWidth theme='orange'>
                    Primary orange
                </Button>
            </Col>
            <Col grow={1} basis='auto'>
                <Button fullWidth theme='orange'>
                    Secondary orange
                </Button>
            </Col>
        </Row>
        <Row>
            <Col grow={1} basis='auto'>
                <Button primary fullWidth theme='red'>
                    Primary red
                </Button>
            </Col>
            <Col grow={1} basis='auto'>
                <Button fullWidth theme='red'>
                    Secondary red
                </Button>
            </Col>
        </Row>
        {/* <Row>
            <Col grow={1} basis='auto'>
                <Button primary fullWidth theme='lightGrey'>
                    Primary lightGrey
                </Button>
            </Col>
            <Col grow={1} basis='auto'>
                <Button fullWidth theme='lightGrey'>
                    Secondary lightGrey
                </Button>
            </Col>
        </Row> */}
        <Row>
            <Col grow={1} basis='auto'>
                <Button primary disabled fullWidth theme='green'>
                    Primary disabled
                </Button>
            </Col>
            <Col grow={1} basis='auto'>
                <Button disabled fullWidth theme='green'>
                    Secondary disabled
                </Button>
            </Col>
        </Row>
        <Row>
            <Col grow={1} basis='auto'>
                <Button fullWidth>
                    Default
                </Button>
            </Col>
        </Row>
        <Row>
            <Col grow={1} basis='auto'>
                <LinkButton theme='orange' dataQa='link-button-qa' fullWidth href='http://example.com'>
                    Link button
                </LinkButton>
            </Col>
            <Col grow={1} basis='auto'>
                <LinkButton fullWidth primary disabled theme='green' href='http://example.com'>
                    Link button
                </LinkButton>
            </Col>
        </Row>
    </div>
);

```js
import {
    Layout, Page, Row, Col, Link, Card, CardHeader, CardSection,
    Divider, Button, Message, Definition, DefinitionItem,
    DefinitionTerm, DefinitionValue, LayoutHead, Tag
} from 'zk-ui';


<>
    <Layout>
        <Layout.Header>
            <Page>
                <svg width='188' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 434.5 113.17'><polygon fill='#22b14c' points='53 44 66.56 44 52 67.76 52 73 74 73 74 67 59.79 67 74 43.81 74 38 53 38 53 44'/><path fill='#22b14c' d='M92.55,99.34L96.73,112h-8.5ZM86.36,118H98.51l2,6h7L95,89H89.77L77.32,124h7Z' transform='translate(0 -51)'/><path fill='#22b14c' d='M158,111.92c0,4-2.42,6.4-6,6.4s-6-2.4-6-6.4V89h-7v23.16c0,7.38,5.49,12.22,12.5,12.22s12.5-4.84,12.5-12.22V89h-6v22.92Z' transform='translate(0 -51)'/><path fill='#22b14c' d='M187.28,100a4.74,4.74,0,0,1-4.95,5H176V95h6.33a4.78,4.78,0,0,1,4.95,5M169,89v35h7V111h6.67c7.06,0,11.29-5.09,11.29-11s-4.23-11-11.29-11H169Z' transform='translate(0 -51)'/><rect fill='#22b14c' x='226' y='38' width='7' height='35'/><path fill='#22b14c' d='M117.08,104.58v0h0Zm7.78-.17L137,89h-7.91l-12,16H117V89h-7v35h7V104.59l17.91,21.05v-9Z' transform='translate(0 -51)'/><path fill='#22b14c' d='M203.55,104.58v0h0Zm7.78-.17L223.51,89H215.6l-12,16H204V89h-7v35h7V104.6l17.64,21.05-0.12-9Z' transform='translate(0 -51)'/><path fill='#000' d='M261,105h-6V96h5.83c3,0,5,1.67,5,4.53s-1.93,4.47-5,4.47M261,89H248v35h7V111h6.17c7.1,0,11.35-5.05,11.35-11s-4.25-11-11.35-11' transform='translate(0 -51)'/><path fill='#000' d='M294.83,109.84a10.87,10.87,0,0,0,5.45-9.71c0-6-4.25-11.13-11.35-11.13H276v35h6V111h0v-6h0V96h6.58c3,0,5,1.84,5,4.69,0,2.16-1.11,3.31-3,4.31h-7.66l17.94,21.14v-8.86Z' transform='translate(0 -51)'/><path fill='#000' d='M321.19,116.77a5.53,5.53,0,0,1-4.3,1.87,5.64,5.64,0,0,1-4.35-1.87c-1.3-1.48-1.64-3.1-1.64-9.83s0.34-8.36,1.64-9.83a5.62,5.62,0,0,1,4.35-1.87,5.51,5.51,0,0,1,4.3,1.87c1.31,1.47,1.69,3.1,1.69,9.83s-0.38,8.36-1.69,9.83m-4.3-27.63A12.44,12.44,0,0,0,307.57,93c-3.48,3.54-3.38,7.91-3.38,14s-0.1,10.42,3.38,14a13.21,13.21,0,0,0,18.61,0c3.48-3.54,3.43-7.92,3.43-14s0-10.43-3.43-14a12.34,12.34,0,0,0-9.28-3.84' transform='translate(0 -51)'/><polygon fill='#000' points='350.18 56.93 341.19 38 335 38 335 73 341 73 341 53.04 347.91 66 352.46 66 359 53.04 359 73 366 73 366 38 359.12 38 350.18 56.93'/><rect fill='#000' x='370' y='66' width='7' height='7'/><rect fill='#22b14c' x='237' y='66' width='7' height='7'/><path fill='#000' d='M397,112.23c0,4-1.9,6.44-5.53,6.44s-5.47-2.41-5.47-6.44V89h-7v23.47c0,7.42,5.44,12.29,12.5,12.29S404,119.9,404,112.47V89h-7v23.23Z' transform='translate(0 -51)'/><path fill='#000' d='M415.13,113l4.35-12.73L423.68,113h-8.55Zm6.81-24h-5.27l-12.51,35h7l2.08-6h12.23l2,6h7Z' transform='translate(0 -51)'/><polygon fill='#22b14c' points='35 35 0 34.93 35 0 35 35'/><polygon fill='#22b14c' points='0 74 0 39.04 35 39 35 74 0 74'/><polyline fill='#22b14c' points='0 113 0 78.03 35 78 0.18 113.17'/></svg>
            </Page>
        </Layout.Header>
        <Layout.Body>
            <Page greyBg verticalIndent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cumque nihil officia ipsum non minima cupiditate, veritatis voluptatem architecto tenetur nesciunt, eveniet sapiente similique laborum unde corporis provident facere quia.
            </Page>
            <Page verticalIndent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cumque nihil officia ipsum non minima cupiditate, veritatis voluptatem architecto tenetur nesciunt, eveniet sapiente similique laborum unde corporis provident facere quia.
            </Page>
            <Page fullHeight greyBg verticalIndent>
                <Message bottomIndent theme='green'>Example message</Message>
                <Row noGutter>
                    <Col.Main>
                        <Card noShadow>
                            <CardSection>
                                <Tag item='Example' theme='green' />
                                <Tag item='Example' theme='red' />
                                <Tag item='Example' theme='orange' />
                                <LayoutHead>
                                    Page title Lorem ipsum dolor sit amet consectetur
                                </LayoutHead>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cumque nihil officia ipsum non minima cupiditate, veritatis voluptatem architecto tenetur nesciunt, eveniet sapiente similique laborum unde corporis provident facere quia. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </CardSection>
                            <Divider />
                            <CardSection>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cumque nihil officia ipsum non minima cupiditate, veritatis voluptatem architecto tenetur nesciunt, eveniet sapiente similique laborum unde corporis provident facere quia. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </CardSection>
                            <Divider />
                            <CardSection>
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
                            </CardSection>
                        </Card>
                    </Col.Main>
                    <Col.Sidebar>
                        <Card noShadow>
                            <CardHeader>
                                Sidebar
                            </CardHeader>
                            <CardSection>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cumque nihil officia ipsum non minima cupiditate, veritatis voluptatem architecto tenetur nesciunt, eveniet sapiente similique laborum unde corporis provident facere quia. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </CardSection>
                            <Divider />
                            <CardSection>
                                <Button primary fullWidth bottomIndent theme='green'>
                                    Історія аукціону
                                </Button>
                                <Button fullWidth theme='lightGrey'>
                                    Перевірити підпис
                                </Button>
                            </CardSection>
                        </Card>
                    </Col.Sidebar>
                </Row>
            </Page>
        </Layout.Body>
        <Layout.Footer>
            <Page verticalIndent>
                <Row>
                    <Col basis='auto'>
                        <Link>Тарифы</Link>
                    </Col>
                    <Col basis='auto'>
                        <Link>Контакты</Link>
                    </Col>
                    <Col basis='auto'>
                        <Link>Политика конфиденциальности</Link>
                    </Col>
                    <Col basis='auto'>
                        <Link>Регламент</Link>
                    </Col>
                    <Col basis='auto'>
                        <Link>О площадке</Link>
                    </Col>
                </Row>
            </Page>
        </Layout.Footer>
    </Layout>
</>
```

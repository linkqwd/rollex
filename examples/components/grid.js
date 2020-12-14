import React from 'react';
import {
    Form, Divider, Card, CardHeader, CardSection, Row, Col,
    Label, Input, NumberInput, Textarea,
    Dropdown, Checkbox, Link, Tooltip, Button, Hint,
    RadioGroup, Tag,
} from 'zk-ui';


class TenderForm extends React.Component {
    state = {
        procedureType: 'a',
        isMultilot: false,
        isLot: false,
        contactName: 'anderson',
        contactCountry: 'ua',
        tenderName: '',
        tenderDescription: '',
        tenderBudget: undefined,
        tenderCurrency: 'UAH',
        taxIncluded: false,
        bidStep: undefined,
        bidStepPercent: undefined,
        bidSecurity: false,
    };

    onSubmit = () => console.log(this.state);

    onChange = (e) => {
        const target = e.target;
        let value;
        switch (e.target.type) {
            case 'checkbox': // fallthrough
                value = target.checked;
                break;
            default:
                value = target.value;
        }
        this.setState({ [e.target.name]: value });
    };

    render() {
        return (
            <Form>
                <Card noShadow>
                    <CardHeader>
                        Procedure type
                    </CardHeader>
                    <CardSection>
                        <Row gutter={10}>
                            Using&nbsp;<b>fitRight</b>&nbsp;prop for Col
                        </Row>
                        <Row>
                            <Col>
                                <Tag item='Example' theme='green' />
                            </Col>
                            <Col>
                                <Tag item='Example' theme='green' />
                            </Col>
                            <Col>
                                <Tag item='Example' theme='green' />
                            </Col>
                            <Col fitRight>
                                <Tag item='fitRight' theme='orange' noIndent />
                            </Col>
                        </Row>
                        <Row gutter={10}>
                            Using&nbsp;<b>fitLeft</b>&nbsp;prop for Col
                        </Row>
                        <Row justify={'flex-end'}>
                            <Col fitLeft>
                                <Tag item='fitLeft' theme='orange' noIndent />
                            </Col>
                            <Col>
                                <Tag item='Example' theme='green' />
                            </Col>
                            <Col>
                                <Tag item='Example' theme='green' />
                            </Col>
                            <Col>
                                <Tag item='Example' theme='green' />
                            </Col>
                        </Row>
                        <Row noGutter>
                            <Label>Select procedure type</Label>
                        </Row>
                        <Row>
                            <Col grow={1}>
                                <Dropdown
                                    searchable
                                    name='procedureType'
                                    options={[
                                        { value: 'a', label: 'one' },
                                        { value: 'b', label: 'two' },
                                        { value: 'c', label: 'three' },
                                    ]}
                                    selected={this.state.procedureType}
                                    onChange={this.onChange}
                                />
                            </Col>
                            <Col>
                                <Col.Aligner>
                                    <Checkbox
                                        name='isLot'
                                        label='Is lot'
                                        checked={this.state.isLot}
                                        onChange={this.onChange}
                                    />
                                </Col.Aligner>
                            </Col>
                            <Col grow={1}>
                                <Dropdown
                                    searchable
                                    name='procedureType'
                                    options={[
                                        { value: 'a', label: 'one' },
                                        { value: 'b', label: 'two' },
                                        { value: 'c', label: 'three' },
                                    ]}
                                    selected={this.state.procedureType}
                                    onChange={this.onChange}
                                    error={'error text'}
                                />
                            </Col>
                            <Col grow={1}>
                                <Col.Aligner>
                                    <Checkbox
                                        name='isMultilot'
                                        label='Is multilot'
                                        checked={this.state.isMultilot}
                                        onChange={this.onChange}
                                        error={'error'}
                                    />
                                </Col.Aligner>
                            </Col>
                        </Row>
                    </CardSection>
                </Card>
                <Card noShadow>
                    <CardHeader>
                        Company
                    </CardHeader>
                    <CardSection>
                        <h3>Company info</h3>
                        <p>Development corp.</p>
                    </CardSection>
                    <Divider />
                    <CardSection>
                        <h3>Contact info</h3>
                        <Row>
                            <Col grow={1}>
                                <Input
                                    disabled
                                    label='Company name'
                                    name='companyName'
                                    defaultValue='Development corp.'
                                    type='text'
                                />
                            </Col>
                        </Row>
                        <Row noGutter>
                            <Label>Main contact</Label>
                        </Row>
                        <Row>
                            <Col grow={1}>
                                <Dropdown
                                    name='contactName'
                                    selected={this.state.contactName}
                                    options={[
                                        { value: 'anderson', label: 'Mr. Anderson' },
                                        { value: 'doe', label: 'J. Doe' },
                                    ]}
                                    onChange={this.onChange}
                                />
                            </Col>
                            <Col grow={1}>
                                <Dropdown
                                    name='contactCountry'
                                    selected={this.state.contactCountry}
                                    options={[
                                        { value: 'ua', label: 'Ukraine' },
                                        { value: 'us', label: 'USA' },
                                        { value: 'uk', label: 'United Kingdom' },
                                    ]}
                                    onChange={this.onChange}
                                />
                            </Col>
                            <Col grow={1}>
                                <Input
                                    disabled
                                    name='phoneNumber'
                                    type='text'
                                    defaultValue='+380677776655'
                                />
                            </Col>
                            <Col grow={1}>
                                <Input
                                    disabled
                                    name='email'
                                    type='text'
                                    defaultValue='company@example.com'
                                />
                            </Col>
                        </Row>
                        <Row noGutter>
                            <Col basis='auto'>
                                <Link>Add new contact</Link>
                            </Col>
                            <Col>
                                <Tooltip position='right' content='Follow the link to add new contact' />
                            </Col>
                        </Row>
                    </CardSection>
                </Card>
                <Card noShadow>
                    <CardHeader>
                        Tender information
                    </CardHeader>
                    <CardSection>
                        <Row>
                            <Col grow={1}>
                                <Input
                                    label='Tender name'
                                    name='tenderName'
                                    type='text'
                                    value={this.state.tenderName}
                                    onChange={this.onChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col grow={1}>
                                <Textarea
                                    label={<span>Tender description <Hint display='inline'>(optional)</Hint></span>}
                                    name='tenderDescription'
                                    maxLength={10000}
                                    value={this.state.tenderDescription}
                                    onChange={this.onChange}
                                    hint={`Symbols left: ${10000 - this.state.tenderDescription.length}`}
                                />
                            </Col>
                        </Row>
                    </CardSection>
                    <Divider />
                    <CardSection>
                        <Row noGutter>
                            <Col grow={1}>
                                <Label>Tender budget</Label>
                            </Col>
                            <Col grow={1}>
                                <Label>Currency</Label>
                            </Col>
                            <Col grow={2} />
                        </Row>
                        <Row noGutter>
                            <Col grow={1}>
                                <NumberInput
                                    name='tenderBudget'
                                    value={this.state.tenderBudget}
                                    onChange={this.onChange}
                                />
                            </Col>
                            <Col grow={1}>
                                <Dropdown
                                    name='tenderCurrency'
                                    selected={this.state.tenderCurrency}
                                    options={[
                                        { value: 'UAH', label: 'Ukraine hryvna' },
                                        { value: 'USD', label: 'USA Dollar' },
                                        { value: 'EUR', label: 'Euro' },
                                    ]}
                                    onChange={this.onChange}
                                />
                            </Col>
                            <Col grow={2} />
                        </Row>
                        <Row>
                            <Hint>
                                Budget should not be greater than 200 000 hryvnas.
                            </Hint>
                        </Row>
                        <Row>
                            <Col>
                                <Checkbox
                                    label='Include tax'
                                    name='taxIncluded'
                                    checked={this.state.taxIncluded}
                                    onChange={this.onChange}
                                />
                            </Col>
                        </Row>
                        <Row noGutter>
                            <Label>Step of bid reduction in the auction</Label>
                        </Row>
                        <Row>
                            <Col grow={3}>
                                <NumberInput
                                    name='bidStep'
                                    value={this.state.bidStep}
                                    onChange={this.onChange}
                                />
                            </Col>
                            <Col grow={1}>
                                <NumberInput
                                    name='bidStepPercent'
                                    value={this.state.bidStepPercent}
                                    onChange={this.onChange}
                                    after='%'
                                />
                            </Col>
                            <Col grow={8} />
                        </Row>
                        <Row>
                            <RadioGroup
                                label='Bid security'
                                name='bidSecurity'
                                checked={this.state.bidSecurity ? 'yes' : 'no'}
                                options={[
                                    { value: 'yes', label: 'Yes' },
                                    { value: 'no', label: 'No' },
                                ]}
                                onChange={this.onChange}
                            />
                        </Row>
                    </CardSection>
                </Card>
                <Row>
                    <Col grow={1}>
                        <Button
                            theme='green'
                            fullWidth
                            onClick={this.onSubmit}
                        >
                            Submit
                        </Button>
                    </Col>
                    <Col grow={3} />
                </Row>
            </Form>
        );
    }
}

export default TenderForm;

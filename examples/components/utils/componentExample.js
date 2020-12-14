import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


export const LayoutSection = styled.section`
    margin-bottom: 50px;
    &:last-child {
        margin-bottom: 0;
    }
`;

const Head = styled.h1`
    margin: 0;
    font-size: 24px;
    font-weight: normal;
    color: #777;
`;

const Section = styled.section`
    margin-top: 30px;
`;


const ComponentSection = styled(Section)`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'};
    justify-content: ${props => props.justifyContent || 'flex-start'};
    padding: 40px 20px;
    border: 1px solid #dddfe2;
    border-radius: 3px;
    background-color: #fff;

    > * {
        flex: ${props => props.grow ? props.grow : 0} 1 auto;
    }

    > * + * {
        margin-left: ${props => !props.flexDirection && 20 || 0}px;
    }
`;



class ComponentExample extends React.Component {
    static propTypes = {
        component: PropTypes.func.isRequired,
        code: PropTypes.string.isRequired,
    };

    componentDidMount() {
        // Use Prism.js to highlight the code example.
        Prism.highlightElement(this.codeElem);
    }

    render() {
        const { title, component, code, justifyContent, flexDirection, grow } = this.props;
        const Component = component;

        return (
            <div>
                <Head>
                    {title}
                </Head>
                <ComponentSection
                    justifyContent={justifyContent}
                    flexDirection={flexDirection}
                    grow={grow}
                >
                    <Component />
                </ComponentSection>
                <Section>
                    <pre>
                        <code
                            ref={(elem) => this.codeElem = elem}
                            className='lang-jsx line-numbers'
                        >
                            {code}
                        </code>
                    </pre>
                </Section>
            </div>
        );
    }
}

export default ComponentExample;

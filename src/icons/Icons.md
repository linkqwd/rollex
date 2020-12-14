```js
import styled from 'styled-components';
import * as icons from 'zk-ui/icons';

const TitleWrapper = styled.p`
    margin: 10px 0 0;
    font-size: 11px;
    color: #7c8796;
    user-select: all;
`;

const Wrapper = styled.div`
    display: inline-block;
    margin: 0 10px 30px;
    width: 90px;
    vertical-align: top;
    text-align: center;
`;


<>
    {Object.values(icons)
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(
        icon => (
            <Wrapper key={icon.name} title={icon.name}>
                {icon({ active: true })}
                <TitleWrapper>{icon.name}</TitleWrapper>
            </Wrapper>
        )
    )}
</>
```

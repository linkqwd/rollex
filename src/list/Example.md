```js
import { List, ListItem, Link, LayoutInfoSection, Hint, LayoutSubhead } from 'zk-ui';
import { LikeIcon, StarIcon, TrashcanIcon } from 'zk-ui/icons';


<>
    <LayoutSubhead bold>
        List with 'withBorder' props and 'none' list style type
    </LayoutSubhead>
    <List>
        <ListItem withBorder>
            <LikeIcon />
            <LayoutInfoSection>
                <Link>Likes</Link>
                <Hint>42</Hint>
            </LayoutInfoSection>
        </ListItem>
        <ListItem withBorder>
            <StarIcon />
            <LayoutInfoSection>
                <Link>Favourites</Link>
                <Hint>42</Hint>
            </LayoutInfoSection>
        </ListItem>
        <ListItem withBorder>
            <TrashcanIcon />
            <LayoutInfoSection>
                <Link>Deleted</Link>
                <Hint>42</Hint>
            </LayoutInfoSection>
        </ListItem>
    </List>
    <LayoutSubhead bold>
        List style type 'disc'
    </LayoutSubhead>
    <List listStyle='disc'>
        <ListItem>
            First
        </ListItem>
        <ListItem>
            Second
        </ListItem>
        <ListItem>
            Third
        </ListItem>
    </List>
    <LayoutSubhead bold>
        List style type 'decimal'
    </LayoutSubhead>
    <List listStyle='decimal'>
        <ListItem>
            First
        </ListItem>
        <ListItem>
            Second
        </ListItem>
        <ListItem>
            Third
        </ListItem>
    </List>
    <LayoutSubhead bold>
        List style type 'listWithBorders'
    </LayoutSubhead>
    <List listWithBorders>
        <ListItem>
            First
        </ListItem>
        <ListItem>
            Second
        </ListItem>
        <ListItem>
            Third
        </ListItem>
    </List>
</>
```

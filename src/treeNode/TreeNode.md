```js
import { normalize, schema } from 'normalizr';
import { TreeNode } from 'zk-ui';


const node = new schema.Entity('children', {}, {

    idAttribute: (value) => value.data.id,

    processStrategy: (value, parent, key) => {
        if (parent.data) {
            return { ...value, parentId: parent.data.id };
        } else {
            return { ...value };
        }
    },
});
const children = new schema.Array(node);
node.define({ children });
const rootNodes = new schema.Array(node);

const res = normalize(
    [
        {
            data: { id: 1, name: 'a' },
            children: [
                {
                    data: { id: 4, name: 'aa' },
                    children: [
                        {
                            data: { id: 5, name: 'aaa' },
                            children: [],
                        }
                    ],
                },
                {
                    data: { id: 6, name: 'aa' },
                    children: [
                        {
                            data: { id: 7, name: 'aaa' },
                            children: [],
                        },
                        {
                            data: { id: 8, name: 'aaa' },
                            children: [],
                        },
                    ],
                },
            ]
        },
        {
            data: { id: 2, name: 'b' },
            children: [],
        },
        {
            data: { id: 3, name: 'c' },
            children: [],
        },
    ],
    rootNodes
);


const lastIdx = res.result.length - 1;
const getNodeById = (nodeId) => res.entities.children[nodeId];
const getParentNodeById = (nodeId) => res.entities.children[nodeId].parentId;
const getChildren = (nodeId) => res.entities.children[nodeId].children;


class TreeExample extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: new Set(),
            selectedChildren: new Set(),
            expanded: new Set(),
        };
        this.setParentToHasSelectedChild = this.setParentToHasSelectedChild.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onExpand = this.onExpand.bind(this);
        this.nodeRenderer = this.nodeRenderer.bind(this); 
    }

    setParentToHasSelectedChild(nodeId) {
        if (!nodeId) return;

        const { selectedChildren } = this.state;
        selectedChildren.add(nodeId);
        this.setParentToHasSelectedChild(getParentNodeById(nodeId));
    };

    onSelect(node) {
        const { selected, selectedChildren } = this.state;
        const nodeId = node.data.id;

        selected.clear();
        selected.add(nodeId);

        // Change selectedChildren
        selectedChildren.clear();
        this.setParentToHasSelectedChild(getParentNodeById(nodeId));

        // Update state
        this.setState({ selected, selectedChildren });
    };

    onExpand(node) {
        const { expanded } = this.state;
        const nodeId = node.data.id;

        if (expanded.has(nodeId)) {
            expanded.delete(nodeId);
        } else {
            expanded.add(nodeId);
        }

        // Update state
        this.setState({ expanded });
    };

    nodeRenderer(node) {
        return `${node.data.id} - ${node.data.name}`;
    }

    render() {
        return (
            <div>
                {res.result.map((nodeId, idx) => (
                    <TreeNode
                        key={nodeId}
                        isLast={idx === lastIdx}
                        isSelectedFn={(nodeId) => this.state.selected.has(nodeId)}
                        isExpandedFn={(nodeId) => this.state.expanded.has(nodeId)}
                        hasSelectedChildFn={(nodeId) => this.state.selectedChildren.has(nodeId)}
                        nodeId={nodeId}
                        nodeRenderer={this.nodeRenderer}
                        onExpand={this.onExpand}
                        onSelect={this.onSelect}
                        getNodeById={getNodeById}
                        getChildren={getChildren}
                        {...getNodeById(nodeId)}
                    />
                ))}
            </div>
        );
    }
}

<TreeExample />
```

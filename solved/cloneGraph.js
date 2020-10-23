const cloneGraph = (node) => {
    let nodeMap = {};
    let childrenNodes = node.children;
    let visited = new Set();
    visited.add(node.val);
    while(hasUnvisited(childrenNodes, visited)) {
        for(let i = 0; i < childrenNodes.length; i++) {
            let childNode = childrenNodes[i]
            let childVal = childNode.val;
            if(!visited.has(childVal)) {
                nodeMap[childVal] = childNode
            }
        }
        if(!visited.has())
    }
};

const hasUnvisited = (children, visited) => {
    for(let i = 0; i < children.length; i++) {
        if(!visited.has(children[i].val)) {
            return true;
        };
    };
    return false;
};

class node {
    constructor(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    };
};
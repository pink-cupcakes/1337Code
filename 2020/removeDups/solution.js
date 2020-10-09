class LinkedList {
    constructor(node) {
        this.Head = node,
        this.Length = 1
    };

    GetHead() {
        return this.Head
    };

    AddToTail(node) {
        let tail = this.Head;

        while(tail.Next != null) {
            tail = tail.Next;
        }

        tail.AddNode(node);
    };
};

class Node {
    constructor(d) {
        this.Data = d,
        this.Next = null,
        this.Index = 0
    };

    UpdateIndex(parentNode) {
        this.Index = parentNode.Index + 1
    };

    AddNode(node) {
        node.UpdateIndex(this),
        this.Next = node
    };

    DeleteNextNode() {
        if(this.Next === null) {
            throw "Next node is undefined"
        };

        this.Next = this.Next.Next
    };
};

const removeDuplicateNode = (linkedList) => {
    let parentHead = linkedList.GetHead();
    let head = parentHead.Next;
    let seenSet = new Set([parentHead.Data]);

    while(head != null) {
        if(seenSet.has(head.Data)) {
            parentHead.DeleteNextNode();
            head = head.Next;
            continue;
        }

        seenSet.add(head.Data);
        parentHead = head;
        head = head.Next;
    };

    return linkedList;
};

(() => {
    let nodeA = new Node(1);
    let nodeB = new Node(2);
    let nodeC = new Node(1);
    let nodeD = new Node(3);
    let nodeE = new Node(4);
    let nodeF = new Node(4);
    let nodeG = new Node(2);
    let nodeH = new Node(6);
    let nodeI = new Node(7);

    let linkedList = new LinkedList(nodeA);
    linkedList.AddToTail(nodeB);
    linkedList.AddToTail(nodeC);
    linkedList.AddToTail(nodeD);
    linkedList.AddToTail(nodeE);
    linkedList.AddToTail(nodeF);
    linkedList.AddToTail(nodeG);
    linkedList.AddToTail(nodeH);
    linkedList.AddToTail(nodeI);

    let res = removeDuplicateNode(linkedList).GetHead();

    console.log(res.Data);
    while(res.Next != null) {
        res = res.Next;
        console.log(res.Data);
    };
})()
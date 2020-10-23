const merge = (linkedList1, linkedList2) => {
    console.log(`Called merge with\nhead1: ${JSON.stringify(linkedList1)}\nhead2: ${JSON.stringify(linkedList2)}`)
    let iteratorNode1 = linkedList1.head;
    let iteratorNode2 = linkedList2.head;

    if(iteratorNode1 == null) {
        return linkedList2;
    };

    if(iteratorNode2 == null) {
        return linkedList1;
    };

    while(iteratorNode1 !== null) {
        console.log(iteratorNode1)
        if(iteratorNode2 == null) {
            iteratorNode2 = iteratorNode1;
            break;
        } else if (iteratorNode1.val < iteratorNode2.val) {
            console.log("SMALLER")
            iteratorNode2.insertBeforeVal(iteratorNode1.val);
            console.log(iteratorNode2)
            iteratorNode1 = iteratorNode1.next;
            continue;
        };
        iteratorNode2 = iteratorNode2.next;
    };

    console.log(`Result is: ${JSON.stringify(linkedList2)}`)
    return linkedList2;
};

const mergeSort = (linkedList) => {
    if(linkedList.head == null || linkedList.head.next == null) {
        return linkedList;
    };

    let fastPointerEnd = linkedList.head;

    // FastpointerStart === slowPointer, this is necessary because:
    // slowPointer will be the end of the first LinkedList and slowPointer.next will be set to null
    // FastPointerEnd will move at twice the speed, but will not have a head node. The head node should be the FastPointerStart, which moves at the same pace as slowPointer
    let fastPointerStart = linkedList.head;
    let slowPointer = linkedList.head;

    while(fastPointerEnd != null && fastPointerEnd.next != null && fastPointerEnd.next.next != null) {
        fastPointerEnd = fastPointerEnd.next.next;
        fastPointerStart = fastPointerStart.next;
        slowPointer = slowPointer.next;
        // console.log(`FastPointerStart = ${JSON.stringify(fastPointerStart)}`);
        // console.log(`FastPOinterEnd = ${JSON.stringify(fastPointerEnd)}`);
        // console.log(`SlowPointer = ${JSON.stringify(slowPointer)}`)
    };

    // Prevent overlap with slowPointer
    fastPointerStart = fastPointerStart.next;
    slowPointer.next = null;

    // console.log(`The LinkedList is ${JSON.stringify(linkedList)}`)
    // console.log(`The left is ${JSON.stringify(linkedList.head)}`);
    // console.log(`The right is ${JSON.stringify(fastPointerStart)}`)

    let leftLinkedList = mergeSort(new LinkedList(linkedList.head));
    let rightLinkedList = mergeSort(new LinkedList(fastPointerStart));
    return merge(leftLinkedList, rightLinkedList);
}

class Node {
    constructor(val) {
        this.val = val,
        this.next = null
    };

    deleteNode() {
        this.next = null;
        return;
    };

    insertBeforeVal(val) {
        let next = new Node(this.val);
        next.next = this.next;

        this.val = val;
        this.next = next;
        return;
    };

    insertNextVal(val) {
        let newNode = new Node(val);
        newNode.next = this.next;
        this.next = newNode;
        return;
    };
};

class LinkedList {
    constructor(node) {
        this.head = node
    };

    addToTail(node) {
        let iterateNode = this.head;
        while(iterateNode.next != null) {
            iterateNode = iterateNode.next;
        };

        iterateNode.next = node;
        return
    };

    insertNodeAt(index, node) {
        let iterateNode = this.head;
        while(index != 0) {
            iterateNode = iterateNode.next;
            index--;
        };

        iterateNode.insertNode(node);
        return;
    };

    deleteNodeAt(index) {
        let iterateNode = this.head;
        while(index != 0) {
            iterateNode = iterateNode.next;
            index--;
        };

        iterateNode.deleteNode();
        return;
    };
};

(() => {
    let nodeA = new Node(15);
    nodeA.insertNextVal(2);
    nodeA.insertNextVal(5);
    nodeA.insertNextVal(-4);
    nodeA.insertNextVal(0);
    let linkedList = new LinkedList(nodeA);

    linkedList = mergeSort(linkedList);

    let head = linkedList.head;
    while(head.next != null) {
        console.log(head.val);
        head = head.next;
    };
})()
// ------------------------------
// ------------------------------
// Rotate List 
// ------------------------------
// Given a list, rotate the list to the right by k places, where k is non-negative.

// For example:
// Given 1->2->3->4->5->NULL and k = 2,
// return 4->5->1->2->3->NULL.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  };

  addChild(node) {
    this.next = node;
  };

  removeChild() {
    this.next = null;
  };

  clone() {
    let copy = new Node(this.val);
    copy.addChild(this.next);
    return copy;
  };
};

const generateList = (length) => {
  let head = new Node(1);
  let node = head;
  for(i = 2; i < length + 1; i++) {
    let next = new Node(i);
    node.addChild(next);
    node = node.next;
  };
  return head;
};

(() => {
  const rotateList = (head, index) => {
    let first = head;
    while(index !== 0) {
      first = first.next;
      index--;
    };
    let rotateNode = head;
    while(first.next !== null) {
      first = first.next;
      rotateNode = rotateNode.next;
    };
    let newHead = rotateNode.next;
    rotateNode.next = null;
    let newTail = newHead;
    while(newTail.next !== null) {
      newTail = newTail.next;
    };
    newTail.addChild(head);
    return newHead;
  };
  let linkedList = generateList(5);
  console.log(JSON.stringify(rotateList(linkedList, 2)))
})()
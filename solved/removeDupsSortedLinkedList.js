// ------------------------------
// ------------------------------
// Remove Duplicates from Sorted List 
// ------------------------------

// Given a sorted linked list, delete all duplicates such that each element appear only once.


// For example,
// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.
class Node {
  constructor(val) {
    this.val = val;
    this.child = null;
  };

  addChild(node) {
    this.child = node;
  };
};

class LinkedList {
  constructor() {
    this.head = null;
  };

  setHead(node) {
    this.head = node;
  };
};

(() => {
  const removeDups = (head) => {
    let currNode = head;
    while(currNode !== null && currNode.child !== null) {
      while(currNode.child !== null && currNode.val === currNode.child.val) {
        currNode.child = currNode.child.child;
      };
      currNode = currNode.child;
    };
    return head;
  };
  let a = new Node(1);
  let b = new Node(1);
  let c = new Node(7);
  let d = new Node(10);
  let e = new Node(16);
  d.addChild(e);
  c.addChild(d);
  b.addChild(c);
  a.addChild(b);
  console.log(JSON.stringify(removeDups(a)))
})()
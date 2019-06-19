// ------------------------------
// ------------------------------
// Swap Nodes in Pairs 
// ------------------------------

// Given a linked list, swap every two adjacent nodes and return its head.



// For example,
// Given 1->2->3->4, you should return the list as 2->1->4->3.



// Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.

class Node {
  constructor(val) {
    this.val = val;
    this.child = null
  };
  addChild(node) {
    this.child = node;
  }
};

class LinkedList {
  constructor(node) {
    this.head = node;
  };
};

(() => {
  const swapNodes = (node) => {
    let child = node.child;
    node.child = node.child.child;
    child.child = node;
    node = child;
    return node;
  };
  const iterate = (list) => {
    let isHead = true;
    let prevNode = list.head;
    let currentNode = list.head;
    let nextNode = list.head;
    while(nextNode !== null && nextNode.child !== null) {
      currentNode = swapNodes(nextNode);
      if (isHead) {
        list.head = currentNode;
        isHead = false;
      } else {
        prevNode.child = currentNode;
      }
      prevNode = currentNode.child;
      nextNode = nextNode.child;
    };
    return list.head;
  }
  let a = new Node(1);
  let b = new Node(2);
  let c = new Node(3);
  let d = new Node(4);
  let e = new Node(5);
  let f = new Node(6);
  let g = new Node(7);
  let h = new Node(8);
  a.addChild(b);
  b.addChild(c);
  c.addChild(d);
  d.addChild(e);
  e.addChild(f);
  f.addChild(g);
  g.addChild(h);
  let i = new LinkedList(a);
  console.log(JSON.stringify(iterate(i)));
})()
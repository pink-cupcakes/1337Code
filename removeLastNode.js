// ------------------------------
// ------------------------------
// Remove Nth Node From End of List 
// ------------------------------
// Given a linked list, remove the nth node from the end of list and return its head.


// For example,


//    Given linked list: 1->2->3->4->5, and n = 2.

//    After removing the second node from the end, the linked list becomes 1->2->3->5.



// Note:
// Given n will always be valid.
// Try to do this in one pass.

/** 
 * Psuedocode
 * Send two runners, the second will be n after the first runner
 * When the first runner hits the end of the linked list, remove the node at the second runner
*/

(() => {
  class Node {
    constructor(val) {
      this.val = val;
      this.child = null;
      this.length = 1;
    };

    addChild(node) {
      this.child = node;
      this.length = node.length + this.length;
    };
  };

  class LinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    };

    setHead(node) {
      this.head = node;
      this.length = node.length;
    };
  };
  const removeNthNode = (linkedList, n) => {
    let node1 = linkedList.head;
    let node2;
    while(n > 0) {
      if(node1.child !== undefined) {
        node1 = node1.child;
        n--;
      } else {
        return 'N is longer than list length';
      };
    };
    node2 = linkedList.head;
    while(node1.child !== null) {
      node1 = node1.child;
      node2 = node2.child;
    };
    node2.child = node2.child.child;
    return linkedList;
  };

  let a = new Node(1);
  let b = new Node(2);
  let c = new Node(3);
  let d = new Node(4);
  let e = new Node(5);
  d.addChild(e);
  c.addChild(d);
  b.addChild(c);
  a.addChild(b);
  let test = new LinkedList();
  test.setHead(a);
  console.log(JSON.stringify(removeNthNode(test, 2)));
})()
// ------------------------------
// ------------------------------
// Add Two Numbers 
// ------------------------------
// You are given two non-empty linked lists representing two non-negative integers. The digits
// are stored in reverse order and each of their nodes contain a single digit. Add the two numbers
// and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

(() => {
  class Node {
    constructor(val) {
      this.val = val;
      this.next = null
    };

    addnext(node) {
      this.next = node;
    }
  };

  class LinkedList {
    constructor(node) {
      this.head = node;
    };
  }
  const addNums = (list1, list2) => {
    let l1 = list1.head;
    let l2 = list2.head;
    
    let sum = l1.val + l2.val;
    let nodeval = sum > 9 ? sum % 10 : sum;
    let carrying = Math.floor(sum/10);
    let current = new Node(nodeval);
    let result = new LinkedList(current);
    l1 = l1.next;
    l2 = l2.next;
    while (l1 !== null) {
      sum = l1.val + l2.val + carrying;
      let nodeval = sum > 9 ? sum % 10 : sum;
      next = new Node(nodeval);
      current.addnext(next);
      current = next;
      carrying = Math.floor(sum/10);
      l1 = l1.next;
      l2 = l2.next;
    };

    return result;
  };

  let node1a = new Node(2);
  let node1b = new Node(4);
  let node1c = new Node(3);
  let node2a = new Node(5);
  let node2b = new Node(6);
  let node2c = new Node(4);
  node1a.addnext(node1b);
  node1b.addnext(node1c);
  node2a.addnext(node2b);
  node2b.addnext(node2c);
  let test1 = new LinkedList(node1a);
  let test2 = new LinkedList(node2a);
  console.log(JSON.stringify(addNums(test1, test2)));
})()
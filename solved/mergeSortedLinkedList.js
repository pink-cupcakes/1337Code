// ------------------------------
// ------------------------------
// Merge Two Sorted Lists 
// ------------------------------
// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
class Node {
  constructor(val) {
    this.value = val;
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
  const mergeLists = (list1, list2) => {
    let res = new LinkedList();
    let node1 = list1.head;
    let node2 = list2.head;
    const compare = (val1, val2) => {
      if(val1 < val2) {
        let firstVal = new Node(val1);
        node1 = node1.child;
        return firstVal;
      } else {
        let firstVal = new Node(val2);
        node2 = node2.child;
        return firstVal
      };
    };

    let head = compare(node1.value, node2.value);
    let tail = head;

    while(node1.child !== null) {
      tail.addChild(compare(node1.value, node2.value));
      tail = tail.child;
    };
    while(node2.child !== null) {
      node2 = node2.child;
      tail.addChild(new Node(node2.value));
      tail = tail.child;
    };

    res.setHead(head);
    return head;
  };

  let a = new Node(1);
  let b = new Node(6);
  let c = new Node(7);
  let d = new Node(10);
  let e = new Node(16);
  d.addChild(e);
  c.addChild(d);
  b.addChild(c);
  a.addChild(b);
  let test = new LinkedList();
  test.setHead(a);

  let f = new Node(3);
  let g = new Node(8);
  let h = new Node(11);
  let i = new Node(12);
  let j = new Node(19);
  i.addChild(j);
  h.addChild(i);
  g.addChild(h);
  f.addChild(g);
  let test1 = new LinkedList();
  test1.setHead(f);

  console.log(JSON.stringify(mergeLists(test, test1)));
})()
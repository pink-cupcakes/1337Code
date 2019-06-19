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
  const func = (list1, list2, cb) => {
    let otherHead;
    let res;
    otherHead = cb(list1, list2) ? list2 : list1;
    res = cb(list1, list2) ? list1 : list2;
    if(otherHead.child === null) {
      return res
    } else if(res.child === null) {
      res.addChild(otherHead);
    } else {
      res.addChild(func(res.child, otherHead, cb));
      return res;
    };
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
  console.log(JSON.stringify(func(a, f, function(v1, v2) {
    return v1.value < v2.value;
  })))
})()
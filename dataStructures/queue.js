class Node {
  constructor(val) {
    this.val = val,
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.count = 0;
  };

  next() {
    if(this.first === null) {
      return null;
    };
    let res = this.first.val;
    this.first = this.first.next;
    if(this.first === null) {
      this.last = null;
    };
    this.count--;
    return res;
  };

  add(node) {
    if(this.last === null) {
      this.first = node;
      this.last = node;
      this.count++;
    } else {
      let end = node;
      while(node.next !== null) {
        end = end.next;
      };
      end.next = this.first;
      this.first = node;
      this.count++;
    };
    return
  };
};

module.exports = {
  'node': Node,
  'queue': Queue
}

// (() => {
//   let a = new Queue();
//   for(let i = 1; i < 6; i++) {
//     let b = new Node(i);
//     a.add(b);
//     console.log(a.next())
//   };

//   console.log(JSON.stringify(a));
// })()
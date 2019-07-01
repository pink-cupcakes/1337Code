// ------------------------------
// ------------------------------
// Binary Tree Level Order Traversal 
// ------------------------------
// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).


// For example:
// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7



// return its level order traversal as:

// [
//   [3],
//   [9,20],
//   [15,7]
// ]



(() => {
  let { queue, node } = require('./dataStructures/queue');
  const traverse = (arr) => {
    let children = new queue();
    let index = new node(0);
    children.add(index);
    let res = [[arr[0]]];
    while(children.count !== 0) {
      let index = children.next();
      let subres = [];
      for(let i = 1; i < 3; i++) {
        let childIndex = 2 * index + i;
        let childVal = arr[childIndex];
        if(childVal !== null && childVal !== undefined) {
          subres.push(childVal);
          children.add(new node(childIndex));
        }
      }
      if(subres.length !== 0) {
        res.push(subres);
      };
    };
    return res;
  };
  console.log(traverse([3,9,20,null,null,15,7]));
})()
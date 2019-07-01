// ------------------------------
// ------------------------------
// Symmetric Tree 
// ------------------------------
// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).


// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3



// But the following [1,2,2,null,3,null,3]  is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3




// Note:
// Bonus points if you could solve it both recursively and iteratively.

(() => {
  const checkSymmetry = (arr1, arr2) => {
    if(arr1.length !== arr2.length) {
      return false;
    };
    let iteration = arr1[0];
    let leftChildIndex = iteration * 2;
    let rightChildIndex = leftChildIndex + 1;
    if(leftChildIndex > arr1.length) {
      return true;
    };
    if(arr1[leftChildIndex] === arr2[leftChildIndex] && arr1[rightChildIndex] === arr2[rightChildIndex]) {
      arr1[0] += 1;
      return checkSymmetry(arr1, arr2);
    } else {
      return false;
    };
  };
  console.log(checkSymmetry([0,1,2,2,3,4,4,3],[0,1,2,2,3,4,4,3]))
})()
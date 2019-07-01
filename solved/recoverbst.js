// ------------------------------
// ------------------------------
// Recover Binary Search Tree 
// ------------------------------

// Two elements of a binary search tree (BST) are swapped by mistake.

// Recover the tree without changing its structure.


// Note:
// A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?

const bst = [4,3,6,2,null,5,7];

(() => {
  const recoverTree = (arr) => {
    let i = 1;
    while(i < arr.length) {
      let val = arr[i];
      let leftChildIndex = i * 2;
      let rightChildIndex = leftChildIndex + 1;
      let leftChildVal = arr[leftChildIndex];
      let rightChildVal = arr[rightChildIndex];
      console.log(`index is ${i}\nleftChild is ${leftChildVal} and index is ${leftChildIndex}\nrightChild is ${rightChildVal} and index is ${rightChildIndex}`)
      if(leftChildVal > rightChildVal) {
        arr[leftChildIndex] = rightChildVal;
        arr[rightChildIndex] = leftChildVal;
        return arr;
      };
      if(val < leftChildVal) {
        arr[i] = leftChildVal;
        arr[leftChildIndex] = val;
        return arr;
      };
      if(val > rightChildVal) {
        arr[i] = rightChildVal;
        arr[rightChildIndex] = val;
        return arr;
      };
      i++;
    };
  };
  console.log(recoverTree([null,8,5,10,2,4,9,12]));
})()
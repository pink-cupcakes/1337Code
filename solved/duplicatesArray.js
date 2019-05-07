// ------------------------------
// ------------------------------
// Find All Duplicates in an Array 
// ------------------------------
// Given an array of integers, 1 <= a[i] <= n (n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]

(() => {
  const findDuplicates = (arr) => {
    let res = new Set();
    for(let i = 0; i < arr.length; i++) {
      let index = Math.abs(arr[i]) - 1;
      if(arr[index] < 0) {
        res.add(Math.abs(arr[i]));
      } else {
        arr[index] = arr[index] * -1;
      }
    };
    console.log(res)
  };
  findDuplicates([4,3,2,7,8,2,3,3,3,1,1,10]);
})()
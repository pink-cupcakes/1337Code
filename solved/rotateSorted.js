// ------------------------------
// ------------------------------
// Search in Rotated Sorted Array 
// ------------------------------
// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

(() => {
  const func = (arr, target) => {
    if(target > arr[0]) {
      for(let i = 0; i < arr.length; i++) {
        console.log(`i is: ${i}`)
        if(arr[i] === target) {
          return i;
        };
      };
    } else {
      for(let j = arr.length - 1; j >= 0; j--) {
        console.log(`j is: ${j}`)
        if(arr[j] === target) {
          return j;
        };
      };
    };
    return -1;
  };
  console.log(func([4,5,6,7,0,1,2], 0))
})()
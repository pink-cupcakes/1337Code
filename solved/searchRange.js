// ------------------------------
// ------------------------------
// Search for a Range 
// ------------------------------
// Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].


// For example,
// Given [5, 7, 7, 8, 8, 10] and target value 8,
// return [3, 4].
const binarySearch = (arr, target) => {
  debugger;
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.round((end + start) / 2);
  let eval = arr[mid];
  while(eval !== target) {
    if(start > end) {
      return -1;
    };
    if(eval > target) {
      end = mid - 1;
      mid = Math.floor((end + start) / 2);
      eval = arr[mid];
    } else {
      start = mid + 1;
      mid = Math.floor((end + start) / 2);
      eval = arr[mid];
    };
  };
  return mid;
};

(() => {
  const findRange = (arr, target) => {
    let midIndex = binarySearch(arr, target);
    let startIndex = midIndex;
    let endIndex = midIndex;
    while(arr[startIndex - 1] === target) {
      startIndex--;
    };
    while(arr[endIndex + 1] === target) {
      endIndex++;
    };
    console.log(`StartIndex is ${startIndex}, EndIndex is ${endIndex}`);
  };
  findRange([5, 7, 7, 8, 8, 8, 8, 10], 1);
})()
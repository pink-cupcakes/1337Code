// ------------------------------
// ------------------------------
// Search a 2D Matrix 
// ------------------------------
// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:



// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.




// For example,

// Consider the following matrix:


// [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]


// Given target = 3, return true.

(() => {
  const searchMatrix = (matrix, target) => {
    let targetRow = [];
    for(let i = 0; i < matrix.length; i++) {
      if(matrix[i][0] > target) {
        targetRow = matrix[i - 1];
        break;
      };
    };
    let lower = 0;
    let mid = Math.floor((targetRow.length - 1) / 2);
    let upper = targetRow.length - 1;
    while(mid !== lower && mid !== upper) {
      if(targetRow[mid] === target) {
        return true;
      };
      if(target > targetRow[mid]) {
        lower = mid;
        mid = Math.floor(upper - mid) / 2;
      } else {
        upper = mid;
        mid = Math.floor(mid - lower) / 2;
      };
    };
    return false;
  };
  console.log(searchMatrix([
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ], 15))
})()
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


(() => {
  const searchMatrix = (matrix, target) => {
    for(let i = 0; i < matrix.length; i++) {
      let subarr = matrix[i];
      let min = subarr[0];
      let max = subarr[subarr.length - 1];
      if(target <= max && min <= target) {
        for(let j = 0; j < subarr.length; j++) {
          let val = subarr[j];
          if(val === target) {
            return [i, j];
          };
        };
      };
    };
    return [-1, -1];
  }
  console.log(searchMatrix([
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ], 'omg'))
})()
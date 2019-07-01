// ------------------------------
// ------------------------------
// Set Matrix Zeroes 
// ------------------------------

// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.


// click to show follow up.

// Follow up:


// Did you use extra space?
// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?

(() => {
  const matrixZero = (matrix) => {
    let y = new Set();
    for(let i = 0; i < matrix.length; i++) {
      let row = matrix[i];
      let setZeroRow = false;
      for(let j = 0; j < row.length; j++) {
        let val = row[j];
        if(val === 0) {
          for(let k = i; k >= 0; k--) {
            matrix[k][j] = 0;
          }
          y.add(j);
          setZeroRow = true;
        };
        if(y.has(j)) {
          row[j] = 0;
        };
      };
      if(setZeroRow === true) {
        matrix[i] = new Array(row.length).fill(0);
      };
    };
    return matrix;
  };
  console.log(matrixZero(
    [[1, 2, 3, 0, 5],
    [5, 2, 5, 1, 5],
    [0, 5, 1, 2, 4],
    [1, 2, 3, 0, 5],
    [1, 2, 3, 5, 5]]
  ))
})()
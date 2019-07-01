// ------------------------------
// ------------------------------
// Spiral Matrix 
// ------------------------------
// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.



// For example,
// Given the following matrix:


// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]


// You should return [1,2,3,6,9,8,7,4,5].

(() => {
  const spiralMatrix = (matrix) => {
    let res = [];
    let leftBound = 0;
    let rightBound = matrix[0].length;
    let topBound = 0;
    let bottomBound = matrix.length;
    let reveresed = false;
    while(leftBound < rightBound && topBound < bottomBound) {
      if(!reveresed) {
        let i = leftBound;
        let j = topBound;
        while(i < rightBound) {
          // console.log(`Val is ${matrix[j][i]}, left is ${leftBound}, right is  ${rightBound}, top is ${topBound}, bottom is ${bottomBound}`)
          console.log(`Val is ${matrix[j][i]}, i is ${i}, j is ${j}`)
          res.push(matrix[j][i]);
          i++;
        };
        rightBound--;
        i--;
        j++;
        while(j < bottomBound) {
          // console.log(`Val is ${matrix[j][i]}, left is ${leftBound}, right is  ${rightBound}, top is ${topBound}, bottom is ${bottomBound}`)
          console.log(`Val is ${matrix[j][i]}, i is ${i}, j is ${j}`)
          res.push(matrix[j][i]);
          j++;
        };
        topBound++;
        reveresed = !reveresed;
      } else {
        console.log(reveresed)
        let i = rightBound - 1;
        let j = bottomBound - 1;
        console.log(`i is ${i}, j is ${j}`)
        while(i > leftBound) {
          // console.log(`Val is ${matrix[j][i]}, left is ${leftBound}, right is  ${rightBound}, top is ${topBound}, bottom is ${bottomBound}`)
          console.log(`Val is ${matrix[j][i]}, i is ${i}, j is ${j}`)
          res.push(matrix[j][i]);
          i--;
        };
        leftBound++;
        while(j > topBound) {
          // console.log(`Val is ${matrix[j][i]}, left is ${leftBound}, right is  ${rightBound}, top is ${topBound}, bottom is ${bottomBound}`)
          console.log(`Val is ${matrix[j][i]}, i is ${i}, j is ${j}`)
          res.push(matrix[j][i]);
          j--;
        };
        bottomBound--;
        reveresed = !reveresed;
      };
    };
    return res;
  };
  console.log(spiralMatrix(
    [
      [ 1, 2, 3],
      [ 4, 5, 6],
      [ 7, 8, 9],
      [ 10, 11, 12],
      [ 13, 14, 15],
     ]
  ));
})()
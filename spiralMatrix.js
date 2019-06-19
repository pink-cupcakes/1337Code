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
  const spiralMatrix = (arr) => {
    let res = [];
    let iterations = 0;
    let reverse = false;
    while(iterations < Math.min(arr.length, arr[0].length)) {
      // console.log(`Iteration is ${iterations}, condition is ${Math.min(arr.length, arr[0].length)}`)
      if(!reverse) {
        let i = iterations;
        let j = iterations;
        while(i < arr[iterations].length - iterations) {
          console.log(`1 J is: ${j}, i is ${i}, val is ${arr[j][i]}, iterations is ${iterations}`);
          res.push(arr[j][i]);
          i++;
        };
        i--;
        j++;
        while(j < arr.length - iterations) {
          console.log(`2 J is: ${j}, i is ${i}, val is ${arr[j][i]}, iterations is ${iterations}`);
          res.push(arr[j][i]);
          j++;
        };
        reverse = true;
      } else {
        let j = arr.length - iterations - 1;
        let i = arr[j].length - iterations - 2;
        while(i > iterations) {
          console.log(`3 J is: ${j}, i is ${i}, val is ${arr[j][i]}, iterations is ${iterations}`);
          res.push(arr[j][i]);
          i--;
        };
        while(j > iterations) {
          console.log(`4 J is: ${j}, i is ${i}, val is ${arr[j][i]}, iterations is ${iterations}`);
          res.push(arr[j][i]);
          j--;
        };
        iterations++;
        reverse = false;
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
})();
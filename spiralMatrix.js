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
    let rowiterations = 0;
    let columniterations = 0;
    let reverse = false;
    while(rowiterations < arr[0].length || columniterations < arr.length) {
      // console.log(`Iteration is ${iterations}, condition is ${Math.min(arr.length, arr[0].length)}`)
      if(!reverse) {
        let i = rowiterations;
        let j = columniterations;
        while(i < arr[columniterations].length - rowiterations) {
          console.log(`1 J is: ${j}, i is ${i}, val is ${arr[j][i]}, rowiteration is ${rowiterations}, columniteration is ${columniterations}`);
          res.push(arr[j][i]);
          i++;
        };
        rowiterations++;
        i--;
        j++;
        while(j < arr.length - columniterations) {
          console.log(`2 J is: ${j}, i is ${i}, val is ${arr[j][i]}, rowiteration is ${rowiterations}, columniteration is ${columniterations}`);
          res.push(arr[j][i]);
          j++;
        };
        columniterations++;
        reverse = true;
      } else {
        let j = arr.length - columniterations - 1;
        let i = arr[j].length - rowiterations - 2;
        while(i > rowiterations - 1) {
          console.log(`3 J is: ${j}, i is ${i}, val is ${arr[j][i]}, rowiteration is ${rowiterations}, columniteration is ${columniterations}`);
          res.push(arr[j][i]);
          i--;
        };
        rowiterations++;
        while(j > columniterations - 1) {
          console.log(`4 J is: ${j}, i is ${i}, val is ${arr[j][i]}, rowiteration is ${rowiterations}, columniteration is ${columniterations}`);
          res.push(arr[j][i]);
          j--;
        };
        columniterations++;
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
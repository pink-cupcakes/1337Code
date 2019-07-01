// ------------------------------
// ------------------------------
// Spiral Matrix II 
// ------------------------------
// Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.


// For example,
// Given n = 3,

// You should return the following matrix:

// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]

(() => {
  const generateSpiral = (int) => {
    vertical = 0
    const res = [];
    for(let i = 0; i < int; i++) {
      res.push(new Array(int));
    };
    let val = 1;
    let min = 0;
    let max = 0;
    let x = 0;
    let y = 0;
  }
})
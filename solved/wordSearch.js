// ------------------------------
// ------------------------------
// Word Search 
// ------------------------------

// Given a 2D board and a word, find if the word exists in the grid.


// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.



// For example,
// Given board = 

// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// word = "ABCCED", -> returns true,
// word = "SEE", -> returns true,
// word = "ABCB", -> returns false.

const findLetter = (matrix, target) => {
  let targetRow;
  let i = 0;
  while(i < matrix.length && targetRow === undefined) {
    let row = matrix[i];
    if(row[row.length - 1] >= target) {
      targetRow = row;
    } else {
      i++;
    };
  };
  let j = 0;
  while(j < targetRow.length) {
    let letter = targetRow[j];
    if(letter === target) {
      return {
        i: i,
        j: j
      };
    };
    j++;
  };
  return {
    i: -1,
    j: -1
  }
};

(() => {
  const searchMatrix = (matrix, target) => {
    let letters = target.split('');
    let currLetter = letters[0];
    let { i, j } = findLetter(matrix, currLetter);
    if(i === -1 || j === -1) {
      return false;
    };
    for(let k = 1; k < letters.length; k++) {
      let nextLetter = letters[k];
      // console.log(`i = ${i}, j = ${j}, currLetter = ${currLetter}, nextLetter = ${nextLetter}`)
      if(nextLetter === currLetter) {
        continue;
      };
      if(nextLetter < currLetter) {
        if(i > 0 && matrix[i - 1][j] === nextLetter) {
          i -= 1;
          currLetter = nextLetter;
          continue;
        } else if(j > 0 && matrix[i][j - 1] === nextLetter) {
          j -= 1;
          currLetter = nextLetter;
        } else {
          return false;
        }
      } else if(nextLetter > currLetter) {
        console.log(`i = ${i}, j = ${j}, currLetter = ${currLetter}, nextLetter = ${nextLetter}`)
        if(i < matrix.length - 1 && matrix[i + 1][j] === nextLetter) {
          i += 1;
          currLetter = nextLetter;
        } else if(j < matrix[i].length - 1 && matrix[i][j + 1] === nextLetter) {
          j += 1;
          currLetter = nextLetter;
        } else {
          return false;
        };
      };
    };
    return true;
  };
  console.log(
    searchMatrix(
      [
        ['A','B','C','E'],
        ['G','H','I','S'],
        ['T','V','W','Y']
      ], "AGTVWWVTGH"
    )
  );
})()
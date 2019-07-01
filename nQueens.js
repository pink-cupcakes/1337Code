// ------------------------------
// ------------------------------
// N-Queens 
// ------------------------------
// The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.



// Given an integer n, return all distinct solutions to the n-queens puzzle.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

// For example,
// There exist two distinct solutions to the 4-queens puzzle:

// [
//  [".Q..",  // Solution 1
//   "...Q",
//   "Q...",
//   "..Q."],

//  ["..Q.",  // Solution 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]
class Board {
  constructor(n) {
    let newBoard = new Array(n);
    this.board = newBoard.map(() => {
      return new Array(n);
    });
  };

  placeQueen(x, y) {
    
  }

  checkQRow(x) {
    let row = this.board[x];
    if(row.indexOf(x) !== -1) {
      return true;
    };
    return false;
  }
}

(() => {
  
})
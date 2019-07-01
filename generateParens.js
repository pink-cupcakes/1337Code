// ------------------------------
// ------------------------------
// Generate Parentheses 
// ------------------------------

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.



// For example, given n = 3, a solution set is:


// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

const swap = (arr, index) => {
  let tempVal = arr[index - 1];
  arr[index - 1] = arr[index];
  arr[index] = tempVal;
  return arr;
}

(() => {
  const generateParens = (num) => {
    let res = [];
    let openParens = Array(num).fill('(');
    let closeParens = Array(num).fill(')');
    let parens = openParens.concat(closeParens);
    for(let i = 0; i < parens.length; i++) {
      let j = parens.length - 1;
      while(j > 0) {
        parens = swap(parens, j);
        res.push([...parens]);
        j--;
      };
    };
    return res.map((subarr) => {
      return subarr.join('');
    });
  };
  console.log(generateParens(2))
})()
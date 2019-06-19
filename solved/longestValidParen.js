// ------------------------------
// ------------------------------
// Longest Valid Parentheses 
// ------------------------------
// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.


// For "(()", the longest valid parentheses substring is "()", which has length = 2.


// Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.

(() => {
  const func = (str) => {
    let res = {
      index: 0,
      length: 0
    }
    let symbols = str.split('');
    for(let i = 0; i < symbols.length; i++) {
      let symbol = symbols[i];
      if(symbol === '(') {
        let possPair = {
          index: i,
          length: 1
        }
        let netPair = 1;
        i++;
        while(netPair >= 0 && i < symbols.length) {
          symbol = symbols[i];
          // console.log(`Netpair: ${netPair} and symbols length: ${symbol}`)
          if(symbol === '(') {
            netPair++;
            i++;
            possPair.length += 1;
          } else {
            if(netPair > 0) {
              netPair--;
              possPair.length += 1;
              i++;
            } else {
              if(possPair.length > res.length) {
                res.index = possPair.index;
                res.length = possPair.length;
              };
              possPair.length = 0;
              netPair--;
              i++;
            };
          };
        };
        if(netPair === 0) {
          if(possPair.length > res.length) {
            res.index = possPair.index;
            res.length = possPair.length;
          };
        };
      };
    };
    console.log(res)
    return str.substr(res.index, res.length)
  };
  // console.log(func("()))())()()()()))(()()()"))
  console.log(func("()))(())()()()())()()())()((())))(())()()((((()))))))"))
})()
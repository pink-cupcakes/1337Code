// ------------------------------
// ------------------------------
// Valid Parentheses 
// ------------------------------
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

(() => {
  const pairs = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  const matchPairs = (str) => {
    if(str.length % 2 !== 0) {
      return false;
    };
    
  }
})()
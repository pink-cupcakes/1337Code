// ------------------------------
// ------------------------------
// Valid Parentheses 
// ------------------------------
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.


(() => {
  let matches = {
    '}': '{',
    ')': '(',
    ']': '['
  };

  const func = (str) => {
    let map = {
      '{': 0,
      '(': 0,
      '[': 0
    }
    symbols = str.split('');
    for(let symbol of symbols) {
      if(map[symbol] !== undefined) {
        map[symbol]++;
      } else {
        symbol = matches[symbol];
        map[symbol]--;
      };
    };
    for(var key in map) {
      let val = map[key]
      if(val !== 0) {
        return false;
      };
    };
    return true;
  };
  console.log(func('[]'))
})()
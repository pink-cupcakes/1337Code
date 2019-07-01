// ------------------------------
// ------------------------------
// Letter Combinations of a Phone Number 
// ------------------------------
// Given a digit string, return all possible letter combinations that the number could represent.



// A mapping of digit to letters (just like on the telephone buttons) is given below.



// Input:Digit string "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].



// Note:
// Although the above answer is in lexicographical order, your answer could be in any order you want.

const numVals = {
  1: ['a', 'b', 'c'],
  2: ['d', 'e', 'f'],
  3: ['g', 'h', 'i'],
  4: ['j', 'k', 'l'],
  5: ['m', 'n', 'o'],
  6: ['p', 'q', 'r'],
  7: ['s', 't', 'u'],
  8: ['v', 'w', 'x'],
  9: ['y', 'z']
};

(() => {
  const phoneCombo = (num) => {
    if(num === 0) {
      return [];
    }
    let nums = [];
    let reversednums = [];
    let result = [];
    while(num > 1) {
      nums.push(Math.floor(num % 10))
      num = num / 10;
    };
    for(let i = nums.length - 1; i >= 0; i--) {
      reversednums.push(nums[i]);
    };
    let nextNum = 0;
    nums.shift();
    for(let i = 0; i < nums.length; i++) {
      let num = nums[i];
      nextNum += Math.pow(10, i) * num;
    };
    for(let phoneIndex = 0; phoneIndex < reversednums.length; phoneIndex++) {
      console.log(`The index is ${phoneIndex} and the length is ${reversednums.length}`)
      let phoneDigit = reversednums[phoneIndex]
      let letters = numVals[phoneDigit];

      for(let letterIndex = 0; letterIndex < letters.length; letterIndex++) {
        let resString = letters[letterIndex];
        if(nextNum === 0) {
          return [resString]
        } else {
          let resStrings = phoneCombo(nextNum).map((val) => {
            return resString + val;
          });
          resStrings.forEach((val) => {
            result.push(val);
          })
        }
      };
    };
    return result;
  };

  console.log(phoneCombo(23))
})()
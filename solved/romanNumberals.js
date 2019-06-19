// ------------------------------
// ------------------------------
// Integer to Roman 
// ------------------------------
// Given an integer, convert it to a roman numeral.


// Input is guaranteed to be within the range from 1 to 3999.

(() => {
  const numerals = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  };

  const convertDigit = (digit, pow) => {
    let baseIncrement = numerals[Math.pow(10, pow)];
    let fivedigit = numerals[5 * Math.pow(10, pow)];
    if(digit === 9) {
      let addNum = numerals[Math.pow(10, pow + 1)];
      return baseIncrement.concat(addNum);
    } else if (digit === 4) {
      return baseIncrement.concat(fivedigit);
    } else if (digit < 4) {
      let res = '';
      while(digit > 0) {
        res = res.concat(baseIncrement);
        digit--;
      };
      return res;
    } else {
      let res = fivedigit;
      while(digit > 5) {
        res = res.concat(baseIncrement);
        digit--;
      };
      return res;
    };
  };

  const intToRoman = (num) => {
    let vals = [];
    let res = '';
    while(num > 0) {
      vals.push(num % 10);
      num = Math.floor(num/10);
    };
    for(let i = vals.length - 1; i >= 0; i--) {
      let val = vals[i];
      res = res.concat(convertDigit(val, i));
    };
    return res;
  };

  console.log(intToRoman(3999))
})()
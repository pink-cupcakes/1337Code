// ------------------------------
// ------------------------------
// Roman to Integer 
// ------------------------------
// Given a roman numeral, convert it to an integer.

// Input is guaranteed to be within the range from 1 to 3999.

(() => {
  const numerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  const convertFromString = (str) => {
    const letters = str.split('');
    let prevVal;
    let seenReduce = false;
    let res = 0;
    for(let i = 0; i < letters.length; i++) {
      let val = numerals[letters[i]];
      if(!prevVal) {
        prevVal = val;
      };
      if(val <= prevVal) {
        seenReduce = false;
        res += val;
        prevVal = val;
      } else {
        if(seenReduce) {
          return 'Invalid string';
        };
        res += (val - (2 * prevVal));
        seenReduce = true;
      };
    }
    return res;
  };

  console.log(convertFromString('MMMCMXCIX'));
})()
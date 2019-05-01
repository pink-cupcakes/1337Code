// ------------------------------
// ------------------------------
// Largest Palindrome Product 
// ------------------------------
// Find the largest palindrome made from the product of two n-digit numbers.
//  Since the result could be very large, you should return the largest palindrome mod 1337.

// Example:
// Input: 2
// Output: 987
// Explanation: 99 x 91 = 9009, 9009 % 1337 = 987


// Note:
// The range of n is [1,8].

(() => {
  const isPrime = (val) => {
    for (let i = Math.floor(Math.sqrt(val)); i > 1; i--) {
      if ((val % i) !== 0) {
        return true;
      };
      return false;
    };
  };

  const isPalindrome = (val) => {
    let values = [];
    while(val > 0) {
      values.push(val % 10);
      val = Math.floor(val/10);
    };
    for (let i = 0; i < Math.floor(values.length); i++) {
      let oppositeIndex = values.length - i - 1;
      if (values[i] !== values[oppositeIndex]) {
        return false;
      };
    };
    return true;
  };

  const productSums = (val, maxInt) => {
    let max = 0;
    for (let i = 0; i < maxInt; i++) {
      max += (9 * Math.pow(10, i));
    };
    let min = 0;
    for (let i = 0; i < maxInt; i++) {
      min += (1 * Math.pow(10, i));
    };
    // if (isPrime(val)) {
    //   console.log(val)
    //   return false;
    // } else {
      let iterable = max;
      while(iterable > min) {
        if (val % iterable === 0) {
          let correspondingVal = val/iterable;
          if(correspondingVal < max) {
            // console.log(correspondingVal)
            return true;
          };
        };
        iterable--;
      // };
    };
    return false;
  };

  const palindromeProduct = (val) => {
    let max = 0;
    for (let i = 0; i < val; i++) {
      max += (9 * Math.pow(10, i));
    };
    max = Math.pow(max, 2)
    // console.log(max)
    while(max > 0) {
      if (isPalindrome(max)) {
        if (productSums(max, val)) {
          return max
        };
        max--;
      };
      max--;
    };
  };

  console.log(palindromeProduct(2));
})()
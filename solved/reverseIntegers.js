// ------------------------------
// ------------------------------
// Reverse Integer 
// ------------------------------
// Reverse digits of an integer.


// Example1: x =  123, return  321
// Example2: x = -123, return -321


// click to show spoilers.

// Have you thought about this?

// Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!

// If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.

// Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?

// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

(() => {
  const reverse = (val) => {
    let isNegative = val < 0;
    val = Math.abs(val);
    let ints = [];
    while(val > 0) {
      ints.push(val % 10);
      val = Math.floor(val/10);
    };
    let res = 0;
    for(let i = 0; i < ints.length; i++) {
      let val = ints[i];
      res += (val * Math.pow(10, ints.length - i - 1));
    };
    if(res > Math.pow(2, 31)) {
      return 0;
    };
    return isNegative ? -res : res;
  };
  console.log(reverse(1563847412))
})()
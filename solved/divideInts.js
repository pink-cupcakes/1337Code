// ------------------------------
// ------------------------------
// Divide Two Integers 
// ------------------------------

// Divide two integers without using multiplication, division and mod operator.


// If it is overflow, return MAX_INT.

(() => {
  const divideInts = (num1, num2) => {
    let res = 0;
    while(num1 >= num2) {
      res++;
      num1 -= num2;
    };
    return res;
  };
  console.log(divideInts(55, 4))
})()
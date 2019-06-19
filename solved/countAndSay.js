// ------------------------------
// ------------------------------
// Count and Say 
// ------------------------------
// The count-and-say sequence is the sequence of integers beginning as follows:
// 1, 11, 21, 1211, 111221, ...



// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.



// Given an integer n, generate the nth sequence.



// Note: The sequence of integers will be represented as a string.

const intWordMap = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten"
};

(() => {
  const func = (int) => {
    let ints = [];
    let res = [];
    while(int > 0) {
      ints.push(int % 10);
      int = Math.floor(int/10);
    };
    let lastIndex = {"val": ints[ints.length - 1], "counter": 0};
    for(let i = ints.length - 1; i >= 0; i--) {
      if(lastIndex.val === ints[i]) {
        lastIndex.counter += 1;
        if(i !== 0) {
          console.log(res)
          continue;
        };
      };
      res.push({val: lastIndex.val, counter: lastIndex.counter});
      console.log(res)
      lastIndex.val = ints[i];
      lastIndex.counter = 1;
    };
    let resString = "";
    for(let j = 0; j < res.length; j++) {
      let stringRep = () => {
        let obj = res[j];
        let str = `${intWordMap[obj.counter]} ${obj.val}`;
        return obj.counter > 1 ? `${str}'s` : str;
      };
      switch(j) {
        case 0:
          resString += stringRep();
          break;
        case res.length - 1:
          resString += `, and ${stringRep()}`;
          break;
        default:
          resString += `, ${stringRep()}`;
          break;
      }
    };
    return resString;
  };
  console.log(func(1111234441111))
})()
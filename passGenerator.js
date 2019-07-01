// 1. Pass generator
// i: len

const lower = "qwertyuiopasdfghjklzxcvbnm";
const upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
const numbers = "1234567890";
const symbols = "!@#$%^&*()_+";

(() => {
  const generatePass = (len, params) => {
    let isUpper = upper.split('');
    let isLower = lower.split('');
    let int = numbers.split('');
    let isSymbols = symbols.split('');
    let bank = [].concat(isUpper, isLower, int, isSymbols);
    let objBank = {
      isUpper,
      isLower,
      int,
      isSymbols
    };
    let indexArr = new Array(len);
    indexArr = indexArr.map((val, index) => {
      return index;
    });
    let res = new Array(len);
    for(const [keys, val] of Object.entries(params)) {
      for(let i = 0; i < val; i++) {
        let index = Math.floor(Math.random() * indexArr.length);
        indexArr.splice(index, 1);
        res[index] = objBank[keys][Math.floor(Math.random() * objBank[keys].length)];
      }
    };
    for(let i = 0; i < len; i++) {
      if(res[i] === undefined) {
        let index = Math.floor(Math.random() * bank.length);
        res[i] = (bank[index]);
      };
    };
    return res.join('');
  };
  console.log(generatePass(15, {int: 2, isSymbols: 10}));
})()
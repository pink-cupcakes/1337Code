// ------------------------------
// Permutations 
// ------------------------------

// Given a collection of distinct numbers, return all possible permutations.



// For example,
// [1,2,3] have the following permutations:

// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]
const swap = (arr, index) => {
  let initialVal = arr[index - 1];
  console.log(`Array is ${arr}, prev val ${arr[index - 1]}, initialVal: ${initialVal}, current val ${arr[index]}`)
  arr[index - 1] = arr[index];
  arr[index] = initialVal;
  console.log(`result ${arr}`)
  return arr;
}

(() => {
  const johnsonThomasPermutations = (arr) => {
    let res = [];
    for(let i = 0; i < arr.length; i++) {
      let lastIndex = arr.length - 1;
      while(lastIndex > 0) {
        arr = swap(arr, lastIndex);
        res.push([...arr]);
        lastIndex--;
      };
    };
    return res;
  };
  console.log(johnsonThomasPermutations([1, 2, 3]))
})()
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
  let tempVal = arr[index - 1];
  arr[index - 1] = arr[index];
  arr[index] = tempVal;
  return arr;
}

(() => {
  const func = (arr) => {
    let res = [];
    for(let i = 0; i < arr.length; i++) {
      let j = arr.length - 1;
      while(j > 0) {
        arr = swap(arr, j);
        res.push([...arr]);
        j--;
      };
    };
    return res;
  };

  console.log(func([1, 2, 3, 4, 5, 6]))
})()
// ------------------------------
// ------------------------------
// 3Sum 
// ------------------------------
// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0?
// Find all unique triplets in the array which gives the sum of zero.

// Note: The solution set must not contain duplicate triplets.


// For example, given array S = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

(() => {
  const threesum = (arr) => {
    let twosum = {};
    let res = [];
    let i = 0;
    while(i < arr.length) {
      let val = arr[i];
      i++;
      for(let j = i; j < arr.length; j++) {
        let val2 = arr[j];
        let sum = val + val2;
        if(twosum[sum] === undefined) {
          twosum[sum] = [new Set([i, j])];
        } else {
          twosum[sum].push(new Set([i, j]));
        };
      };
    };
    let j = 0;
    console.log(twosum)
    while(j < arr.length) {
      let negVal = arr[j] * -1;
      if(twosum[negVal] !== undefined) {
        let res1 = [];
        for(const subSet of twosum[negVal]) {
          if(!subSet.has(j)) {
            let cloneSubSet = new Set([])
          }
          res1.push(clonearr);
        };
        res = res.concat(res1);
      };
      j++;
    };
    return res;
  };
  console.log(threesum([-1, 0, 1, 2, -1, -4]))
})()
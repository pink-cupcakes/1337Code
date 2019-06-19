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

(() => {
  const func = (arr) => {
    let res = [];
    for(let i = 0; i < arr.length; i++) {
      let subres = arr[i];
      let subarr = arr.reduce((res, val, index) => {
        if(index !== i) {
          res.push(val);
        };
        return res;
      }, []);
      console.log(subarr)
      if(subarr.length !== 0) {
        let subresult = func(subarr);
        subresult = subresult.map((val) => {
          return val.unshift(subres);
        });
        res.push(subresult);
      };
    };
    return res;
  };

  console.log(func([1, 2, 3]))
})()
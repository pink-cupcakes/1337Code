// ------------------------------
// ------------------------------
// Remove Duplicates from Sorted Array 
// ------------------------------

// Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.


// Do not allocate extra space for another array, you must do this in place with constant memory.



// For example,
// Given input array nums = [1,1,2],


// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.


(() => {
  const func = (arr) => {
    let res = new Set();
    for (const val of arr) {
      if(!res.has(val)) {
        res.add(val);
      };
    };
    return Array.from(res);
  };

  console.log(func([6, 2, 2, 4, 1, 6, 3, 5]))
})()
// ------------------------------
// ------------------------------
// Remove Element 
// ------------------------------
// Given an array and a value, remove all instances of that value in place and return the new length.


// Do not allocate extra space for another array, you must do this in place with constant memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.


// Example:
// Given input array nums = [3,2,2,3], val = 3


// Your function should return length = 2, with the first two elements of nums being 2.


//   Try two pointers.
//   Did you use the property of "the order of elements can be changed"?
//   What happens when the elements to remove are rare?

(() => {
  const func = (arr, target) => {
    let end = 0;
    for(let i = 0; i < arr.length - end; i++) {
      let val = arr[i];
      if(target === val) {
        end++;
        let endval = arr[arr.length - end];
        while(endval === target) {
          end++;
          endval = arr[arr.length - end];
        };
        arr[i] = endval;
      };
    };
    console.log(arr)
    return arr.slice(0, arr.length - end);
  };
  console.log(func([3, 2, 2, 2, 4, 6, 3], 3))
})()
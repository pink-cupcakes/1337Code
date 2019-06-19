// ------------------------------
// ------------------------------
// Implement strStr() 
// ------------------------------

// Implement strStr().


// Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

(() => {
  const func = (arr, target) => {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === target) {
        return i
      };
    };
    return -1;
  }
})()
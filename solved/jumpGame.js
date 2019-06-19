// ------------------------------
// ------------------------------
// Jump Game 
// ------------------------------

// Given an array of non-negative integers, you are initially positioned at the first index of the array.


// Each element in the array represents your maximum jump length at that position. 


// Determine if you are able to reach the last index.



// For example:
// A = [2,3,1,1,4], return true.


// A = [3,2,1,0,4], return false.

(() => {
  const jumpGame = (arr, seen = new Array(arr.length)) => {
    let i = 0;
    while(arr[i] !== undefined && arr[i] > 0) {
      console.log(seen[i])
      if(seen[i] !== undefined) {
        i++;
        continue;
      };
      if(arr.length < (arr[i])) {
        console.log(
          `Arr is: ${arr}
Arr length: ${arr.length}
Index: ${i}
Val: ${arr[i]}`
        )
        return true;
      };
      let j = 0;
      while(j < arr[i]) {
        j++;
        if(seen[j + i] !== undefined) {
          continue;
        } else {
          if(jumpGame(arr.slice(j, arr.length), seen)) {
            return true;
          } else {
            seen[j + 1] = false;
          };
        };
      };
      i++;
    };
    return false;
  };
  console.log(jumpGame([3,2,1,0,4]));
})()
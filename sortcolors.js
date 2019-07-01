// ------------------------------
// Sort Colors 
// ------------------------------

// Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.



// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.



// Note:
// You are not suppose to use the library's sort function for this problem.


// click to show follow up.


// Follow up:
// A rather straight forward solution is a two-pass algorithm using counting sort.
// First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
// Could you come up with an one-pass algorithm using only constant space?

(() => {
  const sort = (arr) => {
    let reslength = arr.length;
    let zero = 0;
    let two = arr.length;
    for(let i = arr.length - 1; i >= 0; i--) {
      let int = arr[i];
      // console.log(i)
      console.log(`The int is ${int} and index is ${i} and the arr is ${JSON.stringify(arr)}`)
      switch(int){
        case 2:
          // console.log(`Hit the 2 case`);
          two -= 1;
          arr[i] = arr[two];
          arr[two] = 2;
          break;
        case 1:
          console.log(`Zero is ${zero} and val is ${arr[zero]}`)
          arr[i] = arr[zero];
          arr[zero] = 1;
          zero += 1;
          i += 1;
      };
    };
    return arr.slice(arr.length - reslength, reslength + 1);
  };
  console.log(sort([1, 1, 0, 1, 1, 0, 2]))
})()
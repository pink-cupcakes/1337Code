// ------------------------------
// ------------------------------
// Trapping Rain Water 
// ------------------------------

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining. 



// For example, 
// Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.




// The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

const findWater = (arr) => {
  let max = Math.min(arr[0], arr[arr.length - 1]);
  let res = 0;
  for(let i = 1; i < arr.length - 2; i++) {
    res += (max - arr[i]);
  };
  return res;
};

(() => {
  const trapWater = (arr) => {
    let totalWater = 0;
    let leftWall = arr[0];
    let rightWall = arr[0];

    let isDescending = true;

    let subArray = [leftWall];
    for(let i = 1; i < arr.length; i++) {
    };
    return totalWater;
  };
  console.log(trapWater([6,1,0,2,1,0,6,3,2,1,2,1]))
})()
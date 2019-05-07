// ------------------------------
// ------------------------------
// Two Sum 
// ------------------------------
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.


// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

(() => {
  const hasIndexes = (nums, target) => {
    let seekingVals = {};
    for(let i = 0; i < nums.length; i++) {
      let val = nums[i];
      let seeker = target - val;
      if(seekingVals[val] !== undefined) {
        return [seekingVals[val], i];
      };
      seekingVals[seeker] = i;
    }
  };

  let nums = [2, 7, 11, 15];
  let target = 9;
  console.log(hasIndexes(nums, target));
})()
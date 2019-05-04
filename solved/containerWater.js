// ------------------------------
// ------------------------------
// Container With Most Water 
// ------------------------------
// Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines,
// which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

(() => {
  const collectRainwater = (arr) => {
    let res = {val: 0, indexes: []};
    for(let i = 0; i < arr.length; i++) {
      let val = arr[i];
      let max = {val: 0, index: null};
      let inverseVolume = 0;
      for(let j = i + 1; j < arr.length; j++) {
        let val2 = arr[j];
        if(val2 >= val || j === arr.length - 1) {
          max.index = j;
          max.val = val2;
          break;
        };
        inverseVolume += val2;
      };
      let volume = Math.min(val, max.val) * (max.index - i - 1) - inverseVolume;
      if(volume > res.val) {
        console.log(val)
        res.val = volume;
        res.indexes = [i, max.index];
      };
    };
    return res;
  };

  console.log(collectRainwater([1,8,6,2,5,4,8,3,7]))
})()
// ------------------------------
// ------------------------------
// Container With Most Water 
// ------------------------------
// Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines,
// which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

(() => {
  const waterTower = (arr) => {
    let res = {val: 0, indexes: []};
    for(let i = 0; i < arr.length; i++) {
      let val = arr[i];
      let max = {val: 0, index: null};
      for(let j = i + 1; j < arr.length; j++) {
        let val2 = arr[j];
        if(val2 > max.val) {
          max.index = j;
          max.val = val2;
        };
      };
      let volume = Math.min(val, max.val) * (max.index - i);
      if(volume > res.val) {
        res.val = volume;
        res.indexes = [i, max.index];
      };
    };
    return res;
  };

  console.log(waterTower([4, 1, 2, 1, 10, 8]))
})()
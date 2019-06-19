// ------------------------------
// ------------------------------
// Merge Intervals 
// ------------------------------
// Given a collection of intervals, merge all overlapping intervals.


// For example,
// Given [1,3],[2,6],[8,10],[15,18],
// return [1,6],[8,10],[15,18].

(() => {
  const merge = (arr) => {
    let res = [];
    let min = null;
    let max = null;
    for(let i = 0; i < arr.length; i++) {
      if(min === null) {
        min = arr[i][0];
      };
      if(max === null) {
        max = arr[i][1];
      };
      if(arr[i][0] - 1 <= max) {
        if(arr[i][1] > max) {
          max = arr[i][1];
        };
      } else {
        res.push([min, max]);
        min = arr[i][0];
        max = arr[i][1];
      }
    };
    res.push([min, max]);
    return res;
  };
  console.log(merge([[1,2],[3,5],[6,7]]));
})()
// ------------------------------
// ------------------------------
// Insert Interval 
// ------------------------------
// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

// You may assume that the intervals were initially sorted according to their start times.


// Example 1:
// Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].



// Example 2:
// Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].



// This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].

(() => {
  const insertInterval = (arr, newArr) => {
    let a = 0;
    while(newArr[0] >= arr[a][0]) {
      a++;
    };
    arr.splice(a, 0, newArr);
    console.log(arr)
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
  console.log(insertInterval([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,9]));
})()
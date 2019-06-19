(() => {
  const binarySearch = (arr, target) => {
    debugger;
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.round((end + start) / 2);
    let eval = arr[mid];
    while(eval !== target) {
      if(start > end) {
        return -1;
      };
      if(eval > target) {
        end = mid - 1;
        mid = Math.floor((end + start) / 2);
        eval = arr[mid];
      } else {
        start = mid + 1;
        mid = Math.floor((end + start) / 2);
        eval = arr[mid];
      };
    };
    return mid;
  };
  console.log(binarySearch([1,2,3,4,5,6,7], 0))
})()
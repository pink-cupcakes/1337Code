// ------------------------------
// ------------------------------
// Merge Sorted Array 
// ------------------------------
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.


// Note:
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.


(() => {
  const mergeArrays = (arr1, arr2) => {
    let last = arr1.length + arr2.length - 1;
    let i = arr1.length - 1;
    let j = arr2.length - 1;
    while(i >= 0) {
      let val1 = arr1[i];
      let val2 = arr2[j];
      if(val2 > val1) {
        arr1[last] = val2;
        j--;
        last--;
      } else {
        arr1[last] = val1;
        i--;
        last--;
      };
    };
    while(j >= 0) {
      let val2 = arr2[j];
      arr1[last] = val2;
      last--;
      j--;
    };
    return arr1;
  };
  console.log(mergeArrays([4,5,6,7,8,10,56,78,90,112],[1,2,3]))
})()
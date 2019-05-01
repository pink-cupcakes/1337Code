// ------------------------------
// ------------------------------
// Median of Two Sorted Arrays 
// ------------------------------
// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// Example 1:

// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0



// Example 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5

// It's just the merge part of mergesort (the time is linear....) then getting median is constant time

var findMedianSortedArrays = function(nums1, nums2) {
    let res = [];
    let index1 = 0;
    let index2 = 0;
    while (index1 < nums1.length) {
      let val1 = nums1[index1];
      let val2 = nums2[index2];
      if (val2 === undefined) {
        res.push(val1);
        index1++;
      } else {
        if (val1 < val2) {
          res.push(val1);
          index1++;
        } else {
          res.push(val2);
          index2++;
        }
      };
    };
    while (index2 < num2.length) {
      let val2 = nums2[index2];
      res.push(val2);
      index2++;
    };
    return res.length % 2 === 0 ? (res[res.length / 2] + res[res.length / 2 - 1]) / 2 : res[Math.floor(res.length / 2)]
};
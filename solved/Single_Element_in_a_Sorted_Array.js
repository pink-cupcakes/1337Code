/**
 * ------------------------------
 * Single_Element_in_a_Sorted_Array 
 * ------------------------------
 * 
 * Given a sorted array consisting of only integers where every element appears twice except for one element which appears once. Find this single element that appears only once. 
 * 
 * 
 * Example 1:
 * 
 * Input: [1,1,2,3,3,4,4,8,8]
 * Output: 2
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: [3,3,7,7,10,11,11]
 * Output: 10
 * 
 * 
 * 
 * Note:
 * Your solution should run in O(log n) time and O(1) space.
 */

 const findSingle = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    };
    i++;
  };
 };

 let testArr1 = [1,1,2,3,3,4,4,8,8];
 let testArr2 = [3,3,7,7,10,11,11];
 console.log(findSingle(testArr1));
 console.log(findSingle(testArr2));
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let startRange = 0;
    let endRange = nums.length;
    let rotateIndex = Math.floor((endRange + startRange)/2);
    
    let val = nums[rotateIndex];
    while(val != target) {
        if(nums[startRange] == target) {
            return startRange;
        };
        if(nums[endRange] == target) {
            return endRange;
        };
        if((startRange == rotateIndex) || (endRange == rotateIndex)) {
            return -1;
        };
        if(target > val) {
            startRange = rotateIndex;
        } else {
            endRange = rotateIndex;
        };
        rotateIndex = Math.floor((endRange + startRange)/2);
        val = nums[rotateIndex];
    };
    
    return rotateIndex;
};
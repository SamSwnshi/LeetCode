/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if(nums.length === 1){
        return 0;
    }
    nums.sort((a,b)=> a- b)
      let minDiff = Infinity;
    
    // Use a sliding window to find the minimum difference
    for (let i = 0; i <= nums.length - k; i++) {
        let diff = nums[i + k - 1] - nums[i];
        minDiff = Math.min(minDiff, diff);
    }
    
    return minDiff;
};
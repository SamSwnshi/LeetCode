/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let ans = 0;
    for(let i = 0; i <= n ;i++){
        ans ^= i
    }
    for(let i = 0; i < n; i++){
        ans ^=  nums[i]
    }
    return ans;
};
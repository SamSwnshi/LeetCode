/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let slow = 0;
    let fast = slow + 1;
    while(fast <= nums.length - 1){
        if(nums[slow] !== 0){
            slow++;
            fast++;
        }else{
            if(nums[fast] !== 0){
                [nums[slow],nums[fast]] = [nums[fast],nums[slow]]
                slow++
            }
            fast++
        }
    }
    return nums
};
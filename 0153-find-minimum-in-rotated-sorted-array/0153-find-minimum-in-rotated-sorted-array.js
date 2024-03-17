/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let min = nums[0]
    let m = nums.length;
    for(let i = 0; i <= m;i++){
    if(nums[i] < min){
        min = nums[i]
    }
    }
return min;
};
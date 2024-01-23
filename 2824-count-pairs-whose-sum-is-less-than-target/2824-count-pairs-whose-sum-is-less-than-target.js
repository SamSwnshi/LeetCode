/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    nums.sort((a,b)=> a-b);
    let n = nums.length;
    let left = 0;
    let right = n -1;
    let count = 0;
    while(left < right){
        if(nums[left] + nums[right] < target){
            count += right - left;
            left++;
        }else{
            right--;
        }
    }
    return count;
};
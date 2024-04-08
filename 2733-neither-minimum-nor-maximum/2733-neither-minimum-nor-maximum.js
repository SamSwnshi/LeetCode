/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
   let ans = nums.sort((a,b) => a - b);
    
    if(nums.length <= 2){
        return -1;
    }else{
        return nums[1]
    }
    

};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let n = new Map()
    for(let i = 0; i < nums.length ; i++){
        if(n.has(target - nums[i]) ){
            return [n.get(target - nums[i]),i]
        }else{
            n.set(nums[i],i)
        }
    }
    return []
};
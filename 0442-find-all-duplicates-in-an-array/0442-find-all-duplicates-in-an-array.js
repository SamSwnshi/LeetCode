/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let m = new Map()
    
    let ans = [];
    
    for(let i = 0 ; i < nums.length;i++){
        if(m.has(nums[i])){
            ans.push(nums[i])
        }else{
            m.set(nums[i],1)
                     }
    }
    return ans;
};
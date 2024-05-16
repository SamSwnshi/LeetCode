/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a,b)=>{
        let first = a.toString()
        let second = b.toString()
        return parseInt(first + second) > parseInt(second + first) ? -1 : 1
    })
    
    if(nums[0] === 0) return "0"
    
    return nums.join("")
};
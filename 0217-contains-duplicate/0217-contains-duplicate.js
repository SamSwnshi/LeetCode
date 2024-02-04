/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set()
    for(let key of nums){
        if(set.has(key)){
            return true
        }
        set.add(key)
    }
    return false;
};